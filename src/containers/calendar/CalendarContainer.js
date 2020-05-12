import React from 'react';
import CalendarViewer from '../../components/calendar/CalendarViewer';
import { setSelectedDay } from '../../modules/calendar';
import { toggle } from '../../modules/add';
import { connect } from 'react-redux';

const CalendarContainer = ({
  toggle,
  results,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <>
      <CalendarViewer
        toggle={toggle}
        results={results}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
    </>
  );
};

export default connect(
  ({ calendar, add }) => ({
    selectedDay: calendar.selectedDay,
    toggle: calendar.toggle,
    results: add.results,
  }),
  {
    setSelectedDay,
    toggle,
  },
)(CalendarContainer);
