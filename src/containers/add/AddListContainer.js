import React from 'react';
import AddList from '../../components/add/AddList';
import { remove, toggle } from '../../modules/add';
import { connect } from 'react-redux';

const AddListContainer = ({
  color,
  type,
  results,
  remove,
  toggle,
  selectedDay,
  lists,
}) => {
  return (
    <>
      <AddList
        selectedDay={selectedDay}
        results={results}
        remove={remove}
        toggle={toggle}
        type={type}
        color={color}
        lists={lists}
      />
    </>
  );
};

export default connect(
  ({ add, calendar }) => ({
    results: add.results,
    color: add.color,
    lists: add.lists,
    selectedDay: calendar.selectedDay,
  }),
  {
    remove,
    toggle,
  },
)(AddListContainer);
