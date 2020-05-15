import React from 'react';
import styled from 'styled-components';
import { TiDocumentAdd } from 'react-icons/ti';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa';

const SubHeader = ({ type, setSelectedDay, selectedDay }) => {
  return (
    <SubHeaderBlock>
      {type === 'calendar' ? (
        <div className="header">
          <span className="title">How Was Your Day ?</span>
          <Link to="/add">
            <button className="toAdd">
              <TiDocumentAdd />
              <span className="tooltiptext">Add 페이지로 이동하기</span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="header">
          <span className="title">Add Your Monthly Goal !</span>
          <Link to="/calendar">
            <button className="toCal">
              <FaCalendarCheck />
              <span className="tooltiptext">Calendar 페이지로 이동하기</span>
            </button>
          </Link>
        </div>
      )}
    </SubHeaderBlock>
  );
};

const SubHeaderBlock = styled.div`
  user-select: none;
  margin: 5%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 15px;
    border-radius: 4px;
    padding: 4px 9px;
    margin: 0 3px;
    display: inline-flex;
    &.toAdd:hover .tooltiptext {
      visibility: visible;
    }
    &.toCal:hover .tooltiptext {
      visibility: visible;
    }
  }

  .toAdd,
  .toCal {
    /* color: white; */
    font-size: 1.1rem;
    font-weight: 500;
    background: transparent;
    position: relative;
    display: inline-block;
    .tooltiptext {
      font-size: 10px;
      visibility: hidden;
      width: 140px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;

      position: absolute;
      z-index: 1;
      top: 90%;
      left: 50%;
      margin-left: -60px;
    }
  }
  .toAdd {
    font-size: 18px;
  }
  .toCal {
    font-size: 15px;
  }

  span.title {
    /* color: white; */
    padding: 4px;
    font-size: 1.1rem;
    font-weight: 570;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export default SubHeader;
