import React from 'react';
import styled from 'styled-components';
import { IoMdFlower } from 'react-icons/io';

const Today = () => {
  return (
    <TodayBlock>
      <div className="header">
        <div className="icon" style={{ color: '#ffa8a8' }}>
          <IoMdFlower />
        </div>
        <label className="label">오늘을 정리해 보세요</label>
      </div>
      <textarea className="story" rows="3" cols="35"></textarea>
    </TodayBlock>
  );
};

export default Today;

const TodayBlock = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    .icon {
      font-size: 20px;
      padding-right: 4px;
    }
    .label {
      font-size: 15px;
      display: block;
      margin-bottom: 11px;
      font-weight: 570;
      letter-spacing: 0.1px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-family: 10px;
    }
  }

  .story {
    outline: none;
    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px lightgray;
    letter-spacing: 0.15px;
    font-size: 11px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
