import React from 'react';
import HeaderContainer from '../common/HeaderContainer';
import SubHeader from '../../components/common/SubHeader';
import { setSelectedDay } from '../../modules/calendar';
import { connect } from 'react-redux';

const CalendarHeaderContainer = ({
  toggle,
  results,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <>
      <HeaderContainer />
      <SubHeader
        type="calendar"
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
    </>
  );
};

export default connect(
  ({ calendar }) => ({
    selectedDay: calendar.selectedDay,
  }),
  {
    setSelectedDay,
  },
)(CalendarHeaderContainer);
