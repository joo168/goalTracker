import React from 'react';
import AddViewer from '../../components/add/AddViewer';
import HeaderContainer from '../common/HeaderContainer';
import SubHeader from '../../components/common/SubHeader';
import { changeColor, changeItem, setResults } from '../../modules/add';
import { connect } from 'react-redux';

const AddViewerContainer = ({
  item,
  color,
  setResults,
  changeColor,
  changeItem,
}) => {
  return (
    <>
      <HeaderContainer />
      <SubHeader type="editor" />
      <AddViewer
        item={item}
        color={color}
        changeColor={changeColor}
        changeItem={changeItem}
        setResults={setResults}
      />
    </>
  );
};

export default connect(
  ({ add }) => ({
    item: add.item,
    color: add.color,
  }),
  {
    changeColor,
    changeItem,
    setResults,
  },
)(AddViewerContainer);
