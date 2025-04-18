import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => props.padding || '0.8rem 1.5rem'};
  border: none;
  border-radius: ${props => props.borderRadius || '4px'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: ${props => props.height || 'auto'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: translateY(0);
  }
  
  background-color: ${props => {
    if (props.disabled) return '#cccccc';
    return props.variant === 'primary' ? '#2EB5E8' : '#F0DB4F';
  }};
  color: ${props => props.variant === 'primary' ? '#FFFFFF' : '#000000'};
`;

const Button = ({ children, onClick, variant = 'primary', padding, borderRadius, height, ...rest }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      variant={variant}
      padding={padding}
      borderRadius={borderRadius}
      height={height}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;