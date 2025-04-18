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
  background-color: white;
  border-radius: 8px;
  animation: fadeIn 0.5s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ResultTitle = styled.h3`
  color: #00ACD7;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const UrlDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e9ecef;
`;

const ShortUrl = styled.p`
  font-weight: 500;
  word-break: break-all;
  margin-right: 1rem;
  color: #00ACD7;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const CopiedMessage = styled.div`
  color: #28a745;
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