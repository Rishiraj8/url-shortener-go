import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.8); }
  to { transform: scale(1); }
`;

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #00ACD7;
  animation: ${props => props.isLeaving ? fadeOut : fadeIn} 0.8s ease forwards;
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
  animation: ${scaleUp} 1.2s ease;
`;

const Logo = styled.div`
  font-size: 6rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: -2px;
`;

const Tagline = styled.p`
  color: #fff;
  font-size: 1.4rem;
  margin-top: 1.5rem;
  text-align: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const LoadingText = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: #2EB5E8; /* Lighter blue */
    transition: width 0.2s ease;
  }
`;

const MadeWith = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
`;

const Heart = styled.span`
  color: #fff;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const GoLangLogo = styled.span`
  font-weight: 700;
  color: #fff;
`;

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Update progress every 100ms until 100%
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLeaving(true);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <SplashContainer isLeaving={isLeaving}>
      <LogoContainer>
        <Logo>GoShort</Logo>
        <Tagline>Simplify your links with the power of Go</Tagline>
      </LogoContainer>
      
      <LoadingContainer>
        <ProgressBar progress={progress} />
        <LoadingText>Loading your experience...</LoadingText>
      </LoadingContainer>
      
      <MadeWith>
        Made with <Heart>❤</Heart> & <GoLangLogo>Go</GoLangLogo>
      </MadeWith>
    </SplashContainer>
  );
};

export default SplashScreen;