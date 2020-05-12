import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ username }) => {
  return (
    <>
      <HeaderBlock>
        <Link to="/" className="logo">
          GOAL_TRACKER
        </Link>
        <div className="right">
          <UserInfo>{username ? username : 'undefined'}</UserInfo>
        </div>
      </HeaderBlock>
    </>
  );
};

export default Header;

const UserInfo = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  margin-right: 1rem;
`;

const HeaderBlock = styled.div`
  width: cal(100% - 10px);
  max-width: 800px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .logo {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;
