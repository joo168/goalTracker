import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0px 20px 0px 30px;
  width: 60%;
  outline: none;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  text-align: center;
  border-color: gray;
  background: transparent;
  ::placeholder {
    color: gray;
    text-align: center;
  }
`;

const Input = (props) => <StyledInput {...props} />;
export default Input;
