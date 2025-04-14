import React from 'react';
import styled from 'styled-components';
import UrlShortener from './components/UrlShortener';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #ccc;
  margin-bottom: 3rem;
  max-width: 600px;
  text-align: center;
  font-size: 1.1rem;
`;

function App() {
  return (
    <>
    
      <GlobalStyles />
      <AppContainer>
        <Title>URL Shortener</Title>
        <Subtitle>
          Simplify your links with our powerful URL shortening service.
          Just paste your long URL and get a shortened version instantly.
        </Subtitle>
        <UrlShortener />
      </AppContainer>
    </>
  );
}

export default App;