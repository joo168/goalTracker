import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 5rem;
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
