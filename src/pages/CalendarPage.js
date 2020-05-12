import React from 'react';
import CalendarContainer from '../containers/calendar/CalendarContainer';
import CalendarHeaderContainer from '../containers/calendar/CalendarHeaderContainer';
import TodayContainer from '../containers/calendar/TodayContainer';
import AddListContainer from '../containers/add/AddListContainer';

const CalendarPage = () => {
  return (
    <>
      <CalendarHeaderContainer />
      <AddListContainer type="calendar" />
      <CalendarContainer />
      <TodayContainer />
    </>
  );
};

export default CalendarPage;
