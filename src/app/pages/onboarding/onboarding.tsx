"use client"; // Ensure this is a client component

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styled from 'styled-components'; // Import styled-components
import { FaLightbulb, FaFacebook, FaGoogle, FaApple, FaSun, FaMoon, FaCheck, FaMapMarkerAlt, FaChevronDown, FaBell, FaHeart, FaComment, FaPaperPlane, FaHome, FaUsers, FaFacebookMessenger, FaUserCircle, FaChartBar, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import UsersSection from './UsersSection'; // Import the UsersSection component

// Import images from the assets directory
import profilePicture from '../../assets/profilepicture.jpg'; // Adjust the import path
import image1 from '../../assets/Rectangle 2.png'; // Adjust the import path
import image2 from '../../assets/Rectangle 3.png'; // Adjust the import path
import image3 from '../../assets/Ellipse 11.png';
import image4 from '../../assets/Ellipse 11 (1).png';
import image5 from '../../assets/Ellipse 11 (2).png';
import image6 from '../../assets/Ellipse 11 (3).png';
import image7 from '../../assets/Ellipse 11 (4).png';
import image8 from '../../assets/pexels-henri-mathieu-8348740 1.png';
import { MdDescription } from 'react-icons/md';
import homeIcon from '../../assets/HOME.png'; // Adjust the path as necessary
import usersIcon from '../../assets/COMMUNIT.png'; // Adjust the path as necessary
import messengerIcon from '../../assets/MESSENGER.png'; // Adjust the path as necessary
import commentIcon from '../../assets/CHAT.png'; // Adjust the path as necessary
import userIcon from '../../assets/PROFILE.png'; // Adjust the path as necessary

// Styled component for the button
const ContinueButton = styled.button`
  padding: 20px ;
  font-size: 16px;
  border-radius: 15px;
  font-weight: 400;
  background-color: #007bff; /* Blue background */
  color: #fff; /* White text */
  border: none;
  font-family: 'Poppins'; /* Poppins font */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  width: 50px;
  height: 25px;
  background-color: #f0f0f0; /* Light background */
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s ease;
`;

const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: opacity 0.3s ease;
`;

const Icon = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Heading = styled.h1`
  color: #0a0a0a;
  font-size: 2.5rem; /* Tailwind's text-4xl */
  font-weight: bold;
  margin-top: 1.5rem; /* Tailwind's mb-6 */
  font-family: 'Roboto', sans-serif; /* Set font to Roboto */
`;

const BulbIcon = styled(FaLightbulb)`
  color: #ffd000;
  font-size: 4rem; /* Adjust size as needed */
  margin-bottom: 1.5rem; /* Space between icon and title */
`;

// Styled component for input fields
const InputFieldContainer = styled.div`
  position: relative;
  width: 80%; /* Reduced width */
  margin: 0 ; /* Center the input field */
  margin-bottom: 20px; /* Increased gap between input fields */
`;

const InputField = styled.input`
  font-size: 15px; /* Set font size */
  padding: 20px 30px ; /* Add padding for better appearance */
  background-color: #D9D9D9;
  border: none;
  border-radius: 15px; /* Rounded corners */
  width: 100%; /* Full width of the container */
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000000; /* Icon color */
`;

const DropdownIcon = styled(FaChevronDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000000; /* Icon color */
`;

// Styled component for social icons
const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & > a {
    margin: 0 10px; /* Space between icons */
    font-size: 24px; /* Icon size */
  }
`;

// Styled components for individual social icons with specific colors
const FacebookIcon = styled(FaFacebook)`
  color: #3b5998; /* Facebook blue */
`;

const GoogleIcon = styled(FaGoogle)`
  color: #DB4437; /* Google red */
`;

const AppleIcon = styled(FaApple)`
  color: #000; /* Apple black */
`;

const SignUpText = styled.p`
  margin-top: 20px;
  color: #0a0a0a; /* Text color */
`;

const SignUpContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff; /* White background */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const InterestsContainer = styled.div`
  text-align: left;
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
`;

const CategoryButton = styled.button<{ isSelected: boolean }>`
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid #007afc;
  border-radius: 15px;
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#ffffff')}; /* Change color if selected */
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#007afc')}; /* Change text color if selected */
  position: relative; /* For positioning the tick icon */
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const TickIcon = styled(FaCheck)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: white; /* Color of the tick icon */
`;

const GetStartedButton = styled(ContinueButton)`
  margin-top: 20px;
  width: 100%;
`;

const NewSection = styled.div`
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
  text-align: left; /* Align text to the left */
  color: white; /* White text */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  background-color: #ffffff; /* Blue background */
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* Space below the top div */
`;

const MentorMatchHeading = styled.h2`
  font-size: 1.5rem; /* Adjust font size */
  margin-bottom: 10px; /* Space below the heading */
  color: #007bff;
`;

const MentorMatchDescription = styled.p`
  margin-bottom: 20px; /* Space below the description */
`;

const MentorMatchButton = styled(ContinueButton)`
  width: 100%; /* Full width */
`;

const StoriesSection = styled.div`
  margin-top: 10px; /* Space above the stories section */
`;

const StoriesHeading = styled.h3`
  color: #000000; /* White text for the heading */
  margin-bottom: 10px; /* Space below the heading */
`;

const StoriesSwiper = styled(Swiper)`
 
`;

const ProfilePicture = styled.img`
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  border-radius: 50%; /* Circular profile picture */
`;

const Description = styled.p`
 color: #000000;
 font-size:5px;
`;

// Styled components for the popup
const PopupContainer = styled.div`
  left: 1%;
  background-color: white;
  z-index: 1000;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;

`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;

`;

// Styled component for the popup heading
const PopupSubheading = styled.h3`
  margin: 10px 0; /* Space above and below the subheading */
  font-weight: 600; /* Bold text */
  color: white; /* Text color */
`;

// Styled component for the new wrapper
const PopupContentWrapper = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-direction: row; /* Align items in a row */
  justify-content: space-between; /* Space between images and dropdown */
  margin-top: 10px; /* Space above the wrapper */
 
`;

const ImageContainer = styled.div`
  display: flex; /* Use flexbox to display images in a row */
  flex-direction: row; /* Stack images vertically */
  align-items: flex-start; /* Align images to the left */
  margin-left: 20px; /* Space between images and dropdown */
`;

const ImageWrapper = styled.div`
  margin:10px -20px; /* Remove margin to eliminate gaps between images */
  width: 100%; /* Ensure images take full width of the container */
  display: flex;
`;

const DropdownIconWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Change to row to align text and icon horizontally */
  align-items: center; /* Center items vertically */
  justify-content: space-evenly; /* Space between text and icon */
  margin-right: 5px;
  font-weight: 400
`;

const PopupHeading = styled.h2`
 margin: 20px 0;/* Remove default margin */
font-weight: 400;
`;

const PopupParagraph = styled.p`
  margin: 20px 0; /* Space above and below the paragraph */
  font-weight: 400
`;

const PopupContentContainer = styled.div`
  background-color: #0077B5; /* Blue background */
  padding: 20px; /* Optional: Add padding for better appearance */

`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Space between profile info and dots */
  margin-top: 20px; /* Space above the profile section */
  padding: 10px; /* Optional padding */
  background-color: #f9f9f9; /* Light background for the profile section */
  border-radius: 10px; /* Rounded corners */
  color: #000;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column; /* Stack name, subtitle, and additional text vertically */
`;

const DotsIcon = styled.div`
  font-size: 24px; /* Adjust size as needed */
  cursor: pointer; /* Change cursor to pointer */
  color: #000;
`;

const FloatingNav = styled.div`
  position: fixed;
  bottom: 0; /* Position at the bottom */
  left: 0; /* Align to the left */
  width: 100%; /* Full width of the screen */
  display: flex;
  background-color: #fff; /* Background color */
  border-radius: 0; /* Remove rounded corners for full width */
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  padding: 10px 0; /* Padding around the icons */
  z-index: 1000; /* Ensure it is above other content */
`;

const NavIcon = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#007bff' : '#000')}; /* Change color to blue if active */
  font-size: 24px; /* Icon size */
  margin: 10px 25px; /* Space between icons */
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;
  padding: 20px;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 20px 0;
`;

const Message = styled.div<{ isUser?: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

const MessageBubble = styled.div<{ isUser?: boolean }>`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: ${({ isUser }) => (isUser ? '#007bff' : '#f0f0f0')};
  color: ${({ isUser }) => (isUser ? '#fff' : '#000')};
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 10px 0;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const OnboardingPage: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle Sign Up form
  const [isLogin, setIsLogin] = useState(false); // State to toggle between Sign Up and Login
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State to toggle theme
  const [fullName, setFullName] = useState(''); // State for full name
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [location, setLocation] = useState(''); // State for location
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // State for selected categories
  const [showInterests, setShowInterests] = useState(false); // State to toggle Interests section
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [locations] = useState(['Bulawayo', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']); // Sample locations
  const [showNewSection, setShowNewSection] = useState(false); // State to manage new section visibility
  const [showPopup, setShowPopup] = useState(true); // Set to true to show the popup by default
  const [activeIcon, setActiveIcon] = useState<string>('home'); // Default active icon
  const [showUsersSection, setShowUsersSection] = useState(false); // New state for users section
  const [messages, setMessages] = useState([
    { text: 'Hey', isUser: false },
    { text: 'Hey David. How may I help you?', isUser: true },
    { text: 'Who designed this application?', isUser: false },
    { text: 'Tech Connect is an application that was designed by the UX/UI enthusiast Daniel Mudimba.', isUser: true },
    { text: 'What inspired him?', isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showMentorInfo, setShowMentorInfo] = useState(false); // State for showing the Mentor Info section

  const handleGetStarted = () => {
    setShowSignUp(true); // Show the Sign Up form
  };

  const handleLoginClick = () => {
    setIsLogin(true); // Show the Login form
  };

  const handleSignUpClick = () => {
    setIsLogin(false); // Show the Sign Up form
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme); // Toggle the theme
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setShowInterests(true); // Show the Interests section
  };

  const handleGetStartedInInterests = () => {
    setShowNewSection(true); // Show the new section when "Get Started" is clicked in Interests
  };

  // Function to handle location selection
  const handleLocationSelect = (location: string) => {
    setLocation(location); // Set the selected location
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown open/close
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Function to close the popup
  };

  // Function to handle icon click
  const handleIconClick = (icon: string) => {
    setActiveIcon(icon); // Set the clicked icon as active
    if (icon === 'users') {
      setShowNewSection(false); // Hide the new section
      setShowUsersSection(true); // Show the users section
    } else {
      setShowUsersSection(false); // Hide the users section for other icons
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage('');
    }
  };

  const toggleMentorInfo = () => {
    setShowMentorInfo((prev) => !prev); // Toggle Mentor Info visibility
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fff' : '#000', minHeight: '100vh' }}>
      {/* Conditionally render the toggle button */}
      {!showNewSection && !showUsersSection && (
        <ToggleContainer onClick={toggleTheme}>
          <ToggleButton>
            <IconContainer>
              <Icon isVisible={isDarkTheme}>
                <FaSun style={{ color: '#000000' }} />
              </Icon>
              <Icon isVisible={!isDarkTheme}>
                <FaMoon style={{ color: '#000000' }} />
              </Icon>
            </IconContainer>
          </ToggleButton>
        </ToggleContainer>
      )}

      {!showInterests ? ( // Conditional rendering based on showInterests state
        !showSignUp ? ( // Show Swiper and Get Started button
          <>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }} // Enable pagination
            >
              <SwiperSlide>
                <img src={image1.src} alt="Description for Image 1" style={{ width: '100%', height: 'auto' }} />
                <h2>Tech Connect App</h2>
                <p>A place where industry experts and emerging talent come together to connect, share knowledge, and find the guidance needed to thrive in the ever-evolving world of technology.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2.src} alt="Description for Image 2" style={{ width: '100%', height: 'auto' }} />
                <h2>Mentorship. Growth. Connection.</h2>
                <p>Tech Connect empowers growth through mentorship, connecting tech professionals with experienced mentors to foster development and collaboration in a thriving community.</p>
              </SwiperSlide>
            </Swiper>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <ContinueButton onClick={handleGetStarted}>Get Started</ContinueButton> {/* Show Sign Up */}
            </div>
          </>
        ) : ( // Show Sign Up or Login Form
          <SignUpContainer>
            <Heading>Tech Connect</Heading> {/* Updated title */}
            <BulbIcon /> {/* Bulb Icon below the title */}
            <form style={{ marginTop: '20px', display: 'grid' }} onSubmit={handleContinue}>
              {isLogin ? (
                <>
                  <InputFieldContainer>
                    <InputField type="text" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </InputFieldContainer>
                  <InputFieldContainer>
                    <InputField type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </InputFieldContainer>
                  <ContinueButton type="submit">Login</ContinueButton>
                </>
              ) : (
                <>
                  <InputFieldContainer>
                    <InputField type="text" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </InputFieldContainer>
                  <InputFieldContainer>
                    <InputField type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </InputFieldContainer>
                  <InputFieldContainer>
                    <InputField type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </InputFieldContainer>
                  <ContinueButton type="submit">Create Account</ContinueButton>
                </>
              )}
            </form>

            <div>
              <SignUpText>Or sign up with:</SignUpText>
              <SocialIconsContainer>
                <a href="#"><FacebookIcon /></a>
                <a href="#"><GoogleIcon /></a>
                <a href="#"><AppleIcon /></a>
              </SocialIconsContainer>
              <SignUpText>
                {isLogin ? (
                  <>
                    Don't have an account? <a onClick={handleSignUpClick}>Sign up</a>
                  </>
                ) : (
                  <>
                    Already have an account? <a onClick={handleLoginClick}>Log in</a>
                  </>
                )}
              </SignUpText>
            </div>
          </SignUpContainer>
        )
      ) : showNewSection ? ( // Render the new section when showNewSection is true
        <NewSection>
          <TopDiv>
            <MentorMatchHeading>Tech Connect</MentorMatchHeading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ProfilePicture src={image3.src} alt="Profile" />
              <FaBell style={{ marginLeft: '10px', color: 'blue' }} /> {/* Blue Notification Icon */}
            </div>
          </TopDiv>
        

          {/* Stories Section */}
          <StoriesSection>
            <StoriesHeading>Recent Updates</StoriesHeading>
            <StoriesSwiper spaceBetween={5} slidesPerView={5.5}>
              <SwiperSlide>
                <img src={image3.src} alt="Story 1" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Add To Story</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Rodney Moyo</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image5.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Natasha Doe</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image6.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Henry Hozheri</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image7.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Nelly Mundowa</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Rajesh Chopra</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Rajesh Chopra</Description>
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1.src} alt="Story 2" style={{ width: '80%', borderRadius: '100%' }} />
                <Description>Rajesh Chopra</Description>
              </SwiperSlide>
            </StoriesSwiper>
          </StoriesSection>

          {/* Popup Section - Always show in the new section */}
          {showPopup && (
            <PopupContainer>
               <PopupHeader>
                  <PopupHeading>Mentor Match</PopupHeading>
                  <CloseButton onClick={handleClosePopup}>
                    &times; {/* This represents the cancel (X) icon */}
                  </CloseButton>
                </PopupHeader>
              <PopupContentContainer>
               
                <PopupHeading>Tech Connect App</PopupHeading>
                <PopupParagraph>Connect With A Mentor Today!</PopupParagraph>
                <PopupContentWrapper>
                  <ImageContainer>
                    <ImageWrapper>
                      <img src={image6.src} alt="Image 1" style={{ width: '80%', borderRadius: '10px' }} />
                    </ImageWrapper>
                    <ImageWrapper>
                      <img src={image5.src} alt="Image 5" style={{ width: '80%', borderRadius: '10px' }} />
                    </ImageWrapper>
                    <ImageWrapper>
                      <img src={image3.src} alt="Image 3" style={{ width: '90%', borderRadius: '10px' }} />
                    </ImageWrapper>
                    <ImageWrapper>
                      <img src={image4.src} alt="Image 4" style={{ width: '80%', borderRadius: '10px' }} />
                    </ImageWrapper>
                  </ImageContainer>
                  <DropdownIconWrapper>
                    <p>Connect</p>
                    <DropdownIcon style={{ marginRight: '15px', color: 'white' }} /> {/* Change icon color to white */}
                  </DropdownIconWrapper>
                </PopupContentWrapper>
              </PopupContentContainer>
            </PopupContainer>
          )}

          // New Profile Section
          <ProfileSection>
            <ProfileInfo>
              <ProfilePicture src={image3.src} alt="Profile" />
              <ProfileText>
                <span style={{ fontWeight: '700', fontSize: '12px' }}>HenryDev</span> {/* Replace with actual name */}
                <span style={{ fontWeight: '400', fontSize: '12px' }}>Web Developer</span> {/* Replace with actual subtitle */}
                <span style={{ fontWeight: '400', fontSize: '12px' }}>30 min Ago</span> {/* New text element */}
              </ProfileText>
            </ProfileInfo>
            <DotsIcon>...</DotsIcon> {/* Replace with actual dots icon or component */}
          </ProfileSection>

          <p style={{ marginTop: '10px', fontSize: '12px', color: '#000' }}>
            Had an exciting day presenting my new VR program at the Bulawayo International Fair. {/* Replace with actual text */}
          </p>

          <img src={image8.src} alt="Event Image" style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} /> {/* Add your image here */}

          // New Icons Section
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <FaHeart style={{ fontSize: '24px', color: '#ff0000' }} /> {/* Love icon */}
              <span style={{ marginLeft: '5px', fontSize: '14px',color: '#000000' }}>10</span> {/* Number next to love icon */}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <FaComment style={{ fontSize: '24px', color: '#000' }} /> {/* Comment icon */}
              <span style={{ marginLeft: '5px', fontSize: '14px' ,color: '#000000' }}>5</span> {/* Number next to comment icon */}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <FaPaperPlane style={{ fontSize: '24px', color: '#000' }} /> {/* Send icon */}
              <span style={{ marginLeft: '5px', fontSize: '14px',color: '#000000' }}>2</span> {/* Number next to send icon */}
            </div>
          </div>

          {/* Floating Navigation Bar - Only show if new section is visible */}
          {showNewSection && (
            <FloatingNav>
              <NavIcon isActive={activeIcon === 'home'} onClick={() => handleIconClick('home')}>
                <img src={homeIcon.src} alt="Home" style={{ width: '24px', height: '24px' }} />
              </NavIcon>
              <NavIcon isActive={activeIcon === 'users'} onClick={() => handleIconClick('users')}>
                <img src={usersIcon.src} alt="Users" style={{ width: '24px', height: '24px' }} />
              </NavIcon>
              <NavIcon isActive={activeIcon === 'messenger'} onClick={() => handleIconClick('messenger')}>
                <img src={messengerIcon.src} alt="Messenger" style={{ width: '24px', height: '24px' }} />
              </NavIcon>
              <NavIcon isActive={activeIcon === 'comment'} onClick={() => handleIconClick('comment')}>
                <img src={commentIcon.src} alt="Comment" style={{ width: '24px', height: '24px' }} />
              </NavIcon>
              <NavIcon isActive={activeIcon === 'user'} onClick={() => handleIconClick('user')}>
                <img src={userIcon.src} alt="User" style={{ width: '24px', height: '24px' }} />
              </NavIcon>
            </FloatingNav>
          )}
        </NewSection>
      ) : showUsersSection ? ( // Render users section if it's visible
        <>
          <UsersSection /> // Render the UsersSection component
          {/* Floating Navigation Bar - Only show if users section is visible */}
          <FloatingNav>
            <NavIcon isActive={activeIcon === 'home'} onClick={() => handleIconClick('home')}>
              <img src={homeIcon.src} alt="Home" style={{ width: '24px', height: '24px' }} />
            </NavIcon>
            <NavIcon isActive={activeIcon === 'users'} onClick={() => handleIconClick('users')}>
              <img src={usersIcon.src} alt="Users" style={{ width: '24px', height: '24px' }} />
            </NavIcon>
            <NavIcon isActive={activeIcon === 'messenger'} onClick={() => handleIconClick('messenger')}>
              <img src={messengerIcon.src} alt="Messenger" style={{ width: '24px', height: '24px' }} />
            </NavIcon>
            <NavIcon isActive={activeIcon === 'comment'} onClick={() => handleIconClick('comment')}>
              <img src={commentIcon.src} alt="Comment" style={{ width: '24px', height: '24px' }} />
            </NavIcon>
            <NavIcon isActive={activeIcon === 'user'} onClick={() => handleIconClick('user')}>
              <img src={userIcon.src} alt="User" style={{ width: '24px', height: '24px' }} />
            </NavIcon>
          </FloatingNav>
        </>
      ) : activeIcon === 'messenger' ? (
        <ChatSection>
          {!showMentorInfo && ( // Only show the chat section and header if Mentor Info is not visible
            <ChatHeader>
              <div>
                <h3>Tech Connect A.I</h3>
              </div>
              <div onClick={toggleMentorInfo} style={{ cursor: 'pointer' }}>...</div>
            </ChatHeader>
          )}

          {showMentorInfo ? (
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <ProfilePicture src={image3.src} alt="Mentor Profile" />
                <div style={{ marginLeft: '10px' }}>
                  <h3 style={{ margin: 0 }}>David Chikanga</h3>
                  <p style={{ margin: 0, color: '#666' }}>UI/UX Designer</p>
                </div>
              </div>
              <p style={{ margin: '10px 0', color: '#666' }}>+263 123456789</p>
              <p style={{ margin: '10px 0', color: '#666' }}>example@gmail.com</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Connections: 121</button>
                <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Group Projects: 5</button>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                  <FaBell style={{ marginRight: '10px', color: '#007bff' }} />
                  <span>Your Notifications</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                  <FaChartBar style={{ marginRight: '10px', color: '#007bff' }} />
                  <span>Analytics</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                  <FaProjectDiagram style={{ marginRight: '10px', color: '#007bff' }} />
                  <span>Project Collaborations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                  <FaUsers style={{ marginRight: '10px', color: '#007bff' }} />
                  <span>Your Connections</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                  <FaSignOutAlt style={{ marginRight: '10px', color: '#ff0000' }} />
                  <span style={{ color: '#ff0000' }}>Log Out</span>
                </li>
              </ul>
            </div>
          ) : (
            <ChatMessages>
              {messages.map((message, index) => (
                <Message key={index} isUser={message.isUser}>
                  <MessageBubble isUser={message.isUser}>{message.text}</MessageBubble>
                </Message>
              ))}
            </ChatMessages>
          )}
          <ChatInputContainer>
            <ChatInput
              type="text"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <SendButton onClick={handleSendMessage}>
              <FaPaperPlane />
            </SendButton>
          </ChatInputContainer>
        </ChatSection>
      ) : (
        <InterestsContainer>
          <Heading>Interests</Heading>
          <InputFieldContainer>
            <InputField
              type="text"
              placeholder="Enter Location..."
              value={location}
              onClick={toggleDropdown} // Toggle dropdown on input click
              readOnly // Make input read-only to prevent manual input
            />
            <LocationIcon />
            <DropdownIcon onClick={toggleDropdown} /> {/* Toggle dropdown on icon click */}
            {isDropdownOpen && ( // Render dropdown if open
              <div style={{ position: 'absolute', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', zIndex: 1 }}>
                {locations.map((loc) => (
                  <div key={loc} onClick={() => handleLocationSelect(loc)} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}>
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </InputFieldContainer>
          <div>
            <h3>Popular Categories</h3>
            {['Software Dev', 'Data Science', 'Web Developer', 'Cyber-Security', 'UI/UX Design'].map((category) => (
              <CategoryButton key={category} isSelected={selectedCategories.includes(category)} onClick={() => handleCategoryClick(category)}>
                {category}
                {selectedCategories.includes(category) && <TickIcon />}
              </CategoryButton>
            ))}
          </div>
          <div>
            <h3>Featured Categories</h3>
            {['Digital Marketing', 'AI Research', 'Game Development', 'Graphic Design', 'App Dev'].map((category) => (
              <CategoryButton key={category} isSelected={selectedCategories.includes(category)} onClick={() => handleCategoryClick(category)}>
                {category}
                {selectedCategories.includes(category) && <TickIcon />}
              </CategoryButton>
            ))}
          </div>
          <GetStartedButton onClick={handleGetStartedInInterests}>Get Started</GetStartedButton>
        </InterestsContainer>
      )}
    </div>
  );
};

export default OnboardingPage;