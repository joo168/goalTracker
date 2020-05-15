import React from 'react';
import CalendarContainer from '../containers/calendar/CalendarContainer';
import CalendarHeaderContainer from '../containers/calendar/CalendarHeaderContainer';
import TodayContainer from '../containers/calendar/TodayContainer';
import AddListContainer from '../containers/add/AddListContainer';
import styled from 'styled-components';

const CalendarPage = () => {
  return (
    <>
      <CalendarPageBlock>
        <CalendarHeaderContainer />
        <AddListContainer type="calendar" />
        <CalendarContainer />
        <TodayContainer />
      </CalendarPageBlock>
    </>
  );
};

export default CalendarPage;

const CalendarPageBlock = styled.div`
  margin: auto;
  margin-top: 1rem 0;
  width: 60%;
  min-width: 400px;
  max-width: 450px;
  min-height: 613px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  /* padding-bottom: 1rem; */
`;
