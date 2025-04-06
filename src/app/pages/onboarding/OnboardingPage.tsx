import React, { useState } from 'react';
import SignUpPage from './SignUpPage';
import InterestsPage from './InterestsPage';
import NewSectionPage from './NewSectionPage';
import ChatPage from './ChatPage';
import UsersPage from './UsersPage';

const OnboardingPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('signUp'); // Tracks the current page

  const renderPage = () => {
    switch (currentPage) {
      case 'signUp':
        return <SignUpPage onContinue={() => setCurrentPage('interests')} />;
      case 'interests':
        return <InterestsPage onContinue={() => setCurrentPage('newSection')} />;
      case 'newSection':
        return <NewSectionPage onChat={() => setCurrentPage('chat')} onUsers={() => setCurrentPage('users')} />;
      case 'chat':
        return <ChatPage />;
      case 'users':
        return <UsersPage />;
      default:
        return <SignUpPage onContinue={() => setCurrentPage('interests')} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default OnboardingPage;