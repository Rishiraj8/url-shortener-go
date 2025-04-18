import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1rem;
  border: 2px solid #fff;
  border-right: none;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  background-color: white;
  color: #333;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  
  &::placeholder {
    color: #aaaaaa;
  }
  
  &:focus {
    border-color: #2EB5E8;
  }
`;

const InputField = ({ value, onChange, placeholder, ...rest }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputField;