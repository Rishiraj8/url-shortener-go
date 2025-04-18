import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UrlShortener from './components/UrlShortener';
import GlobalStyles from './styles/GlobalStyles';
import SplashScreen from './components/SplashScreen';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #00ACD7; /* Go's light blue */
  padding: 2rem;
  transition: opacity 0.5s ease;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 2.8rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  color: #fff;
  margin-bottom: 3rem;
  max-width: 600px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
`;

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <ContentWrapper>
          <Title>GoShort</Title>
          <Subtitle>
            Simplify your links with our powerful Go-powered URL shortening service.
            Fast, reliable, and built with ♥
          </Subtitle>
          <UrlShortener />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default App;