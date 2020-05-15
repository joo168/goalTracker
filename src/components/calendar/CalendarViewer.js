import React from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const CalendarViewer = ({ setSelectedDay, selectedDay, results, toggle }) => {
  const onClickLeft = () => {
    setSelectedDay(selectedDay.clone().subtract(7, 'day'));
  };
  const onClickRight = () => {
    setSelectedDay(selectedDay.clone().add(7, 'day'));
  };

  const calendar = [];

  for (let i = 0; i < 7; i++) {
    calendar.push({
      i: i,
      date: selectedDay.clone().startOf('week').add(i, 'day'),
    });
  }

  const onClick = (e, id, done) => {
    e.target.id = 'red';
  };

  return (
    <>
      <CalendarViewerBlock>
        <div className="subheader">
          <button className="week-left" onClick={onClickLeft}>
            <MdChevronLeft />
          </button>
          <span className="title">{selectedDay.format('MMMM D')}</span>
          <button className="week-right" onClick={onClickRight}>
            <MdChevronRight />
          </button>
        </div>

        <div className="row">
          <div className="box2">
            <span className="text SUN">SUN</span>
          </div>
          <div className="box2">
            <span className="text MON">MON</span>
          </div>
          <div className="box2">
            <span className="text TUE">TUE</span>
          </div>
          <div className="box2">
            <span className="text WED">WED</span>
          </div>
          <div className="box2">
            <span className="text THU">THU</span>
          </div>
          <div className="box2">
            <span className="text FRI">FRI</span>
          </div>
          <div className="box2">
            <span className="text SAT">SAT</span>
          </div>
        </div>
        <div className="row">
          {calendar.map((c) => (
            <div
              className="box"
              id={
                c.date.format('YYYYMMDD') === selectedDay.format('YYYYMMDD')
                  ? 'selected'
                  : ''
              }
              key={c.i}
            >
              <span
                className="text"
                onClick={() => setSelectedDay(c.date)}
                id={c.date}
              >
                {c.date.format('D')}
              </span>
              <div className="checkHeart" onClick={onClick} id={c.date}>
                ♡
              </div>
            </div>
          ))}
        </div>
      </CalendarViewerBlock>
    </>
  );
};

export default CalendarViewer;

const CalendarViewerBlock = styled.div`
  background-color: #e9ecef;
  padding: 20px;
  margin: 0rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  .subheader {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    .title {
      margin: 0 10px;
      font-weight: 500;
    }
    button {
      background-color: white;
      cursor: pointer;
      outline: none;
      border: none;
      font-size: 15px;
      border-radius: 20px;
      padding: 4px 9px;
      margin: 0 3px;
      display: inline-flex;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    .box2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(90% / 7);
      font-size: 0.8rem;
      &:first-child > .text {
        color: red;
      }
      &:last-child > .text {
        color: #588dff;
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        font-weight: 500;
      }
    }
    #selected {
      .text {
        background-color: ${palette.green[5]};
        color: white;
      }
    }
    .box {
      .checkHeart {
        cursor: pointer;
        font-size: 26px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
      }
      #red {
        color: #fa5252;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(90% / 7);
      font-size: 1rem;
      &:first-child > .text {
        color: red;
      }
      &:last-child > .text {
        color: #588dff;
      }

      .text {
        font-weight: 490;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        cursor: pointer;
        /* color: gray; */
        &:hover {
          background-color: rgba(${palette.green[5]}, 0.1);
        }
      }
    }
  }
`;
