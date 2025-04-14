import React from 'react';
import styled from 'styled-components';
import { FiCopy, FiCheckCircle } from 'react-icons/fi';
import Button from './Button';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ResultTitle = styled.h3`
  color: #FF6B00;
  margin-bottom: 1rem;
`;

const UrlDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;

const ShortUrl = styled.p`
  font-weight: 500;
  word-break: break-all;
  margin-right: 1rem;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const CopiedMessage = styled.div`
  color: #00C853;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease;
`;

const ShortUrlDisplay = ({ shortUrl }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <ResultContainer>
      <ResultTitle>Your Shortened URL</ResultTitle>
      <UrlDisplay>
        <ShortUrl>{shortUrl}</ShortUrl>
        <Button 
          onClick={handleCopy} 
          variant="secondary"
          disabled={copied}
        >
          <IconWrapper>
            {copied ? <FiCheckCircle /> : <FiCopy />}
            {copied ? 'Copied!' : 'Copy'}
          </IconWrapper>
        </Button>
      </UrlDisplay>
      {copied && (
        <CopiedMessage>
          <FiCheckCircle /> URL copied to clipboard
        </CopiedMessage>
      )}
    </ResultContainer>
  );
};

export default ShortUrlDisplay;