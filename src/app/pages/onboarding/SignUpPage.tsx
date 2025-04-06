import React, { useState } from 'react';
import { ContinueButton, InputFieldContainer, InputField, SocialIconsContainer, FacebookIcon, GoogleIcon, AppleIcon } from './components';

interface SignUpPageProps {
  onContinue: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onContinue }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h1>Tech Connect</h1>
      <form onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
        <InputFieldContainer>
          <InputField type="text" placeholder="Enter Full Name" required />
        </InputFieldContainer>
        <InputFieldContainer>
          <InputField type="email" placeholder="Enter Email" required />
        </InputFieldContainer>
        <InputFieldContainer>
          <InputField type="password" placeholder="Enter Password" required />
        </InputFieldContainer>
        <ContinueButton type="submit">{isLogin ? 'Login' : 'Create Account'}</ContinueButton>
      </form>
      <SocialIconsContainer>
        <FacebookIcon />
        <GoogleIcon />
        <AppleIcon />
      </SocialIconsContainer>
    </div>
  );
};

export default SignUpPage;