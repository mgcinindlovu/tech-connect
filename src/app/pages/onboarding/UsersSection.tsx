import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';
import image3 from '../../assets/Ellipse 11.png';
import image1 from '../../assets/Frame 45.png';
import image5 from '../../assets/Frame 45 (3).png';
import image4 from '../../assets/Frame 45 (2).png';
import image2 from '../../assets/Frame 45 (1).png';
import BellImage from '../../assets/Group.png';
import Events from './Events';
import MentorshipPage from './MentorshipPage'; // Import the mentorship page component

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const MentorMatchHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #007bff;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const UsersSection: React.FC = () => {
  const [showEvents, setShowEvents] = useState(false);
  const [showMentorship, setShowMentorship] = useState(false); // State for mentorship page

  const handleImageClick = () => {
    setShowEvents(true);
  };

  const handleMentorshipClick = () => {
    setShowMentorship(true); // Show mentorship page
  };

  const handleBackClick = () => {
    setShowMentorship(false); // Go back to the main page
  };

  return (
    <div>
      {/* Navigation */}
      <TopDiv>
        {!showEvents && !showMentorship && <MentorMatchHeading>Community</MentorMatchHeading>}
        {!showEvents && !showMentorship && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProfilePicture src={image3.src} alt="Profile" />
            <img
              src={BellImage.src}
              alt="Notification Bell"
              style={{ marginLeft: '10px', width: '24px', height: '30px' }}
            />
          </div>
        )}
      </TopDiv>

      {/* Conditional Rendering */}
      {showMentorship ? (
        <MentorshipPage onBack={handleBackClick} /> // Render mentorship page
      ) : !showEvents ? (
        <>
          <p style={{ textAlign: 'left' }}>Explore The Best Of Our Community</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img
                src={image1.src}
                alt="Image 1"
                style={{ width: '48%', borderRadius: '8px', cursor: 'pointer' }}
                onClick={handleImageClick}
              />
              <img
                src={image2.src}
                alt="Image 2"
                style={{ width: '48%', borderRadius: '8px', cursor: 'pointer' }}
                onClick={handleMentorshipClick} // Click to show mentorship page
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src={image4.src} alt="Image 3" style={{ width: '48%', borderRadius: '8px' }} />
              <img src={image5.src} alt="Image 4" style={{ width: '48%', borderRadius: '8px' }} />
            </div>
          </div>
        </>
      ) : (
        <Events 
          onBack={() => setShowEvents(false)} 
          onNavigateToMentors={() => setShowMentorship(true)} 
        />
      )}
    </div>
  );
};

export default UsersSection;