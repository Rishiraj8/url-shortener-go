import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import Button from './Button';
import ShortUrlDisplay from './ShortUrlDisplay';
import { shortenUrl } from '../services/api';
import { FiLink } from 'react-icons/fi';

const ShortenContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  height: 54px; /* Fixed height for better alignment */
`;

const GenerateButtonWrapper = styled.div`
  height: 100%;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 4px;
  font-size: 0.9rem;
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: #ffffff;
  font-weight: 500;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  svg {
    animation: spin 1s linear infinite;
  }
`;

const HistorySection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const HistoryTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.8rem;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;

const OriginalUrl = styled.p`
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;

const ShortUrlText = styled.p`
  color: #F0DB4F;
  font-weight: 500;
`;

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    // Basic URL validation
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }
    
    setError('');
    setLoading(true);
    
    try {
      const response = await shortenUrl(url);
      setShortUrl(response.short_url);
      
      // Add to history
      setHistory(prev => [
        { originalUrl: url, shortUrl: response.short_url },
        ...prev.slice(0, 4) // Keep only the 5 most recent items
      ]);
      
      setUrl('');
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ShortenContainer>
      <Form onSubmit={handleSubmit}>
        <InputField
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your long URL here"
          aria-label="URL to shorten"
        />
        <Button 
          type="submit" 
          disabled={loading} 
          borderRadius="0 4px 4px 0"
          height="100%"
          padding="0 1.5rem"
        >
          {loading ? 'Generating...' : 'Generate'}
        </Button>
      </Form>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {loading && (
        <LoadingIndicator>
          <FiLink />
          Generating your short URL...
        </LoadingIndicator>
      )}
      
      {shortUrl && !loading && <ShortUrlDisplay shortUrl={shortUrl} />}
      
      {history.length > 0 && (
        <HistorySection>
          <HistoryTitle>Recent Shortened URLs</HistoryTitle>
          {history.map((item, index) => (
            <HistoryItem key={index}>
              <OriginalUrl title={item.originalUrl}>{item.originalUrl}</OriginalUrl>
              <ShortUrlText>{item.shortUrl}</ShortUrlText>
            </HistoryItem>
          ))}
        </HistorySection>
      )}
    </ShortenContainer>
  );
};

export default UrlShortener;