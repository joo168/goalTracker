import React from 'react';
import AddViewerContainer from '../containers/add/AddViewerContainer';
import AddListContainer from '../containers/add/AddListContainer';

const AddPage = () => {
  return (
    <>
      <AddViewerContainer />
      <AddListContainer type="add" />
    </>
  );
};

export default AddPage;
