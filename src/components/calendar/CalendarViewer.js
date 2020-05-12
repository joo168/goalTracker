import React, { useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight, MdAlarmOn } from 'react-icons/md';
import { TiHeartFullOutline } from 'react-icons/ti';
import palette from '../../lib/styles/palette';
import moment from 'moment';

const CalendarViewer = ({ setSelectedDay, selectedDay, results, toggle }) => {
  const onClickLeft = () => {
    setSelectedDay(selectedDay.clone().subtract(7, 'day'));
  };
  const onClickRight = () => {
    setSelectedDay(selectedDay.clone().add(7, 'day'));
  };

  // function generate() {
  //   const today = moment();
  //   const startWeek = today.clone().startOf('month').week();
  //   const endWeek =
  //     today.clone().endOf('month').week() === 1
  //       ? 53
  //       : today.clone().endOf('month').week();
  //   let calendar = [];
  //   for (let week = startWeek; week <= endWeek; week++) {
  //     calendar.push(
  //       <div className="row" key={week}>
  //         {Array(7)
  //           .fill(0)
  //           .map((n, i) => {
  //             let current = today
  //               .clone()
  //               .week(week)
  //               .startOf('week')
  //               .add(n + i, 'day');
  //             // let isSelected =
  //             //   today.format('YYYYMMDD') === current.format('YYYYMMDD')
  //             //     ? 'selected'
  //             //     : '';
  //             let isGrayed =
  //               current.format('MM') === today.format('MM') ? '' : 'grayed';
  //             return (
  //               // ${isSelected}   바로 아래 클래스네임에 포함..
  //               <div
  //                 className={`box
  //               ${isGrayed}`}
  //                 key={i}
  //                 id={
  //                   calendar.date.format('YYYYMMDD') ===
  //                   selectedDay.format('YYYYMMDD')
  //                     ? 'selected'
  //                     : ''
  //                 }
  //               >
  //                 <span
  //                   className={`text`}
  //                   onClick={() => setSelectedDay(calendar.date)}
  //                 >
  //                   {current.format('D')}
  //                 </span>
  //               </div>
  //             );
  //           })}
  //       </div>,
  //     );
  //   }
  //   return calendar;
  // }

  const calendar = [];
  // const [bg, changeBg] = useState('');

  for (let i = 0; i < 7; i++) {
    calendar.push({
      i: i,
      date: selectedDay.clone().startOf('week').add(i, 'day'),
      // isOn: '',
      // background: bc,
      // date: selectedDay.clone().startOf('month').add(i, 'day'),
    });
  }

  const onClick = (e, id, done) => {
    e.target.id = 'red';
    // e.target.id = e.target.id + ' red';
    console.log(e.target.id);
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
        {/* {generate()} */}
        <div className="row">
          {calendar.map((c) => (
            <div
              className="box"
              // style={{ background: bc }}
              // onClick={onClick}
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
              <div
                cursor="pointer"
                onClick={onClick}
                id={c.date}
                style={{ fontSize: '26px' }}
              >
                {/* O ○  */}♡{/* 이건 안된다. <TiHeartFullOutline /> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div onClick={onClick}>click!</div> */}
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
        /* color: gray; */
      }
    }
    #selected {
      .text {
        background-color: ${palette.green[5]};
        color: white;
      }
    }
    .box {
      #red {
        color: #fa5252;
        /* background-color: #f03e3e; */
      }
      /* .first {
        background-color: yellow;
        color: black;
      }
      .second {
        background-color: blue;
        color: black;
      } */
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

  /* .row{
      display: flex;
      cursor: pointer;
      &:first-child{
        cursor: initial;
        .box{
          font-weight: bold;
        }
        .box:hover > span.text{
          background-color: white;
        }
      }
      .box{
        position: relative;
        display: inline-flex;
        width: calc(100%/7);
        height: 0;
        padding-bottom: calc(100%/7);
        font-size: 12pt;
        &:first-child{
          color: red;
        }
        &:last-child{
          color: #588dff;
        }
        &.grayed{
          color: gray;
        }
        &:hover{
          span.text{
            background-color: rgba(#588dff, 0.1);
          }
        }
        &.selected{
          span.text{
            background-color: #588dff;
            color: white;
          }
        }
        span.text{
          border-radius: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 60%;
          height: 60%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
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
      font-weight: 500;
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
        color: black;
      }
    }
  } */

  /* .list-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 550px;
    .list-header {
      display: flex;
      justify-content: center;
      color: '#495057';
      font-weight: 540;
      font-family: Geneva, Tahoma, sans-serif;
      letter-spacing: 0.1px;
      font-size: 14px;
      .icon {
        font-size: 20px;
        padding-right: 4px;
        padding-bottom: 5px;
      }
    }
    .list-contents {
      display: flex;
      flex-direction: column;
      border: 1.5px solid lightgray;
      border-radius: 15px;
      padding: 10px;
      width: 75%;
      height: 10px;
      .list {
        display: flex;
        flex-direction: column;
        margin: 5px;
      }
      .result-list {
        font-size: 15px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      .toggle {
        padding-top: 3px;
      }
    }
  } */
`;
