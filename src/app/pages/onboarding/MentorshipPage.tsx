import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mentor1 from '../../assets/man.jpg';
import mentor2 from '../../assets/Frame 45.png';
import spinnerImage2 from '../../assets/man.jpg';
import spinnerImage1 from '../../assets/man2.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
  padding: 20px;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MentorCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const MentorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  cursor: pointer;
`;

const MentorImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;

const MentorName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
`;

const MentorRole = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CircularDottedSpinner = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  div {
    position: absolute;
    width: 10px; /* Adjust size as needed */
    height: 10px; /* Adjust size as needed */
    background-color: black; /* Set to black */
    border-radius: 50%;
    animation: scale 1.2s linear infinite;
  }

  div:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    animation-delay: 0s;
  }

  div:nth-child(2) {
    top: 14%;
    left: 85%;
    transform: translate(-50%, -50%);
    animation-delay: 0.1s;
  }

  div:nth-child(3) {
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
    animation-delay: 0.3s;
  }

  div:nth-child(5) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0.4s;
  }

  div:nth-child(6) {
    top: 85%;
    left: 14%;
    transform: translate(-50%, -50%);
    animation-delay: 0.5s;
  }

  div:nth-child(7) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    animation-delay: 0.6s;
  }

  div:nth-child(8) {
    top: 14%;
    left: 14%;
    transform: translate(-50%, -50%);
    animation-delay: 0.7s;
  }

  @keyframes scale {
    0%, 100% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const RotatedMentorCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 80px; /* Add spacing between cards and spinner */
`;

const RotatedMentorCard = styled.div`
  width: 120px;
  height: 160px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  position: absolute;

  &:nth-child(1) {
    transform: rotate(20deg);
    left: -20px;
  }

  &:nth-child(2) {
    transform: rotate(-20deg);
    right: -20px;
  }
`;

const MentorshipPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [loading, setLoading] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState<null | {
    name: string;
    role: string;
    description: string;
    image: string;
  }>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 10 seconds
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const mentors = [
    {
      name: "Rodney Moyo",
      role: "UX/UI Designer",
      description:
        "Rodney Moyo, a leading User Experience Designer in crafting highly beautiful and clean animated websites, applications...",
      image: mentor1.src,
    },
    {
      name: "Rajesh Moor",
      role: "UX/UI Designer",
      description:
        "Rajesh Moor specializes in creating intuitive and user-friendly designs for web and mobile applications...",
      image: mentor2.src,
    },
    // Add more mentors as needed
  ];

  return (
    <Container>
      <BackButton onClick={() => (selectedMentor ? setSelectedMentor(null) : onBack())}>
        &larr;
      </BackButton>
      {loading ? (
        <LoadingSpinner>
          <RotatedMentorCards>
            <RotatedMentorCard style={{ backgroundImage: `url(${spinnerImage1.src})` }} />
            <RotatedMentorCard style={{ backgroundImage: `url(${spinnerImage2.src})` }} />
          </RotatedMentorCards>
          <CircularDottedSpinner>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </CircularDottedSpinner>
          <LoadingText>Finding A Mentor</LoadingText>
        </LoadingSpinner>
      ) : selectedMentor ? (
        <div>
          <MentorImage
            style={{
              backgroundImage: `url(${selectedMentor.image})`,
              width: "150px",
              height: "150px",
              margin: "20px auto",
            }}
          />
          <h2>{selectedMentor.name}</h2>
          <p style={{ fontWeight: "bold", color: "#666" }}>{selectedMentor.role}</p>
          <p style={{ textAlign: "center", padding: "0 20px" }}>
            {selectedMentor.description} <span style={{ color: "blue" }}>...Read More</span>
          </p>
          <button
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              margin: "10px",
              cursor: "pointer",
            }}
          >
            Request Mentorship
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#007BFF",
              padding: "10px 20px",
              border: "1px solid #007BFF",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Explore More
          </button>
        </div>
      ) : (
        <>
          <h1>Tech Connect</h1>
          <p>Mentors Based On Your Profile</p>
          <MentorCards>
            {mentors.map((mentor, index) => (
              <MentorCard key={index} onClick={() => setSelectedMentor(mentor)}>
                <MentorImage style={{ backgroundImage: `url(${mentor.image})` }} />
                <MentorName>{mentor.name}</MentorName>
                <MentorRole>{mentor.role}</MentorRole>
              </MentorCard>
            ))}
          </MentorCards>
        </>
      )}
    </Container>
  );
};

export default MentorshipPage;