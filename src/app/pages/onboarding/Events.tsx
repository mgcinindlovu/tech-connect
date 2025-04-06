import React, { useState } from 'react';
import styled from 'styled-components';
import mentor1 from '../../assets/man.jpg';
import mentor2 from '../../assets/man2.jpg';

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
`;

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const MentorCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const MentorCard = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CircularDottedSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  color: #007bff;
  margin-top: 10px;
`;

interface EventsProps {
  onBack: () => void;
  onNavigateToMentors: () => void;
}

const Events: React.FC<EventsProps> = ({ onBack, onNavigateToMentors }) => {
  return (
    <div>
      <button onClick={onBack} style={{ marginRight: '10px' }}>
        Back
      </button>
      <button onClick={onNavigateToMentors}>
        Go to Mentors
      </button>
      {/* Add your event details here */}
    </div>
  );
};

const MentorshipPage: React.FC<{ onBack: () => void; onNavigateToMentors: () => void }> = ({ onBack, onNavigateToMentors }) => {
  return (
    <Container>
      <BackButton onClick={onBack}>&larr;</BackButton>
      <MentorCards>
        <MentorCard style={{ backgroundImage: `url(${mentor1.src})` }} />
        <MentorCard style={{ backgroundImage: `url(${mentor2.src})` }} />
      </MentorCards>
      <LoadingSpinner>
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
    </Container>
  );
};

const App: React.FC = () => {
  const [showEvents, setShowEvents] = useState(true);
  const [showMentorship, setShowMentorship] = useState(false);

  return (
    <>
      {showEvents && (
        <Events
          onBack={() => setShowEvents(false)}
          onNavigateToMentors={() => setShowMentorship(true)}
        />
      )}
      {showMentorship && <MentorshipPage onBack={() => setShowMentorship(false)} onNavigateToMentors={() => {}} />}
    </>
  );
};

export default App;