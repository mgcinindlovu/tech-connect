"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen'; // Adjust the import path
import OnboardingPage from '@/app/pages/onboarding'; // Update the import path to reflect the new structure

const HomePage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timer to hide the splash screen after 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false); // Hide Splash screen
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup the timer on component unmount
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!showSplash && <OnboardingPage />} {/* Render the Onboarding page */}
    </>
  );
};

export default HomePage;
