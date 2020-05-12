import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  padding: 0.3rem 1rem;
  font-weight: 700;
  outline: none;
  color: white;
  background: ${palette.green[5]};
  &:hover {
    background: ${palette.green[7]};
  }
  cursor: pointer;

  ${props =>
    props.wider &&
    css`
      padding: 0.7rem 3rem;
      color: white;
      background: ${palette.green[8]};
      &:hover {
        background: ${palette.green[6]};
      }
      border-radius: 15px;
      font-size: 20px;
      margin-top: 15px;
    `}
`;

const Button = props => <StyledButton {...props} />;
export default Button;
