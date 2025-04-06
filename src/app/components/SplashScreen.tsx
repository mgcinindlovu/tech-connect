"use client";

import React from 'react';
import styled from 'styled-components';
import { FaLightbulb } from 'react-icons/fa'; // Use FaLightbulb instead of FaBulb

// Styled components
const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #3b82f6; /* Tailwind's blue-500 */
`;

const Heading = styled.h1`
  color: white;
  font-size: 2.5rem; /* Tailwind's text-4xl */
  font-weight: bold;
  margin-bottom: 1.5rem; /* Tailwind's mb-6 */
  font-family: 'Roboto', sans-serif; /* Set font to Roboto */
`;

const BulbIcon = styled(FaLightbulb)`
  color: #ffd000;
  font-size: 4rem; /* Adjust size as needed */
  margin-bottom: 1.5rem; /* Space between icon and title */
`;

interface SplashScreenProps {
  onComplete: () => void; // Prop to handle splash screen completion
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  return (
    <SplashContainer>
      <Heading>Tech Connect</Heading> {/* Updated title */}
      <BulbIcon /> {/* Bulb Icon below the title */}
      {/* Buttons removed */}
    </SplashContainer>
  );
};

export default SplashScreen; 