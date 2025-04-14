import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  font-size: 1rem;
  background-color: transparent;
  color: #fff;
  outline: none;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    border-color: #FF6B00;
  }
`;

const InputField = ({ value, onChange, placeholder, ...rest }) => {
  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  );
};

export default InputField;