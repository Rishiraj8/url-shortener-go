import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  background-color: ${props => props.variant === 'primary' ? '#FF6B00' : '#FFD700'};
  color: ${props => props.variant === 'primary' ? '#fff' : '#000'};
`;

const Button = ({ children, onClick, variant = 'primary', ...rest }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;