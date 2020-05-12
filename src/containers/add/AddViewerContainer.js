import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddViewer from '../../components/add/AddViewer';
import HeaderContainer from '../common/HeaderContainer';
import SubHeader from '../../components/common/SubHeader';
import {
  changeColor,
  changeItem,
  setResults,
  remove,
  toggle,
} from '../../modules/add';
import { connect } from 'react-redux';

const AddViewerContainer = ({
  item,
  color,
  // results,
  setResults,
  changeColor,
  changeItem,
  // remove,
  // toggle,
  // selectedDay,
}) => {
  // const { item, color } = useSelector(({ add }) => ({
  //   item: add.item,
  //   color: add.color,
  // }));
  // const dispatch = useDispatch();
  // const addItem = useCallback(item => dispatch(addItem(item)), [dispatch]);
  // const changeColor = useCallback(e => dispatch(changeColor(e)), [dispatch]);
  // const changeItem = useCallback(e => dispatch(changeItem(e)), [dispatch]);
  return (
    <>
      <HeaderContainer />
      <SubHeader type="editor" />
      <AddViewer
        // selectedDay={selectedDay}
        item={item}
        color={color}
        // results={results}
        changeColor={changeColor}
        changeItem={changeItem}
        setResults={setResults}
        // remove={remove}
        // toggle={toggle}
      />
    </>
  );
};

export default connect(
  ({ add }) => ({
    item: add.item,
    color: add.color,
    // results: add.results,
    // selectedDay: calendar.selectedDay,
  }),
  {
    changeColor,
    changeItem,
    setResults,
    // remove,
    // toggle,
  },
)(AddViewerContainer);
