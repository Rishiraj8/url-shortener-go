import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const shortenUrl = async (url) => {
  try {
    const response = await axios.post(`${API_URL}/shorten`, {
      url: url
    });
    return response.data;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
};
