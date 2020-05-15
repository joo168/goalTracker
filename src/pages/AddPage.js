import React from 'react';
import AddViewerContainer from '../containers/add/AddViewerContainer';
import AddListContainer from '../containers/add/AddListContainer';
import styled from 'styled-components';

const AddPage = () => {
  return (
    <>
      <AddPageBlock>
        <AddViewerContainer />
        <AddListContainer type="add" />
      </AddPageBlock>
    </>
  );
};

export default AddPage;

const AddPageBlock = styled.div`
  margin: auto;
  margin-top: 1rem 0;
  width: 60%;
  min-width: 400px;
  max-width: 450px;
  min-height: 613px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
