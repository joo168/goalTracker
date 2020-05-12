import React from 'react';
import Button from '../../components/common/Button';
import styled from 'styled-components';
import img from '../../imgs/1.jpg';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const StartViewer = ({ username, setUser }) => {
  const onChange = (e) => {
    setUser(e.target.value);
    console.log(username);
  };

  const saveUser = (username) => {
    try {
      const currentUser = JSON.stringify(username);
      localStorage.setItem('username', currentUser);
    } catch (e) {
      return undefined;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('입력하신 이름이 ' + username + ' 인가요?');
    saveUser(username);
    window.location = '/calendar';
  };

  return (
    <StartViewerBlock>
      <div className="bg"></div>
      <p>GET STARTED</p>
      <div className="greeting">For Your Goal</div>
      <form onSubmit={onSubmit}>
        <div className="askName 1" type="submit">
          <input
            onChange={onChange}
            className="underline"
            placeholder="What's your name?"
          />
        </div>
        <div className="askName 2">
          <Button wider>Welcome!</Button>
        </div>
      </form>
    </StartViewerBlock>
  );
};

export default StartViewer;

const StartViewerBlock = styled.div`
  background-image: url(${img});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;

  .bg {
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
  }
  p {
    color: #f1f3f5;
    font-weight: 650;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 15%;
  }
  .greeting {
    color: ${palette.green[5]};
    font-weight: 500;
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
  .askName {
    display: flex;
    justify-content: center;
  }
  input {
    margin-top: 40px;
    outline: none;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0);
    border-color: white;
    font-size: 20px;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    ::placeholder {
      color: white;
      text-align: center;
    }
  }
`;
