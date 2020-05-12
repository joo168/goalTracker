import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';

const AddViewer = ({ item, color, changeColor, changeItem, setResults }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    changeItem('');

    setResults(item, color);
  };

  const onChange = (e) => {
    changeItem(e.target.value);
  };
  const onClick = (e) => {
    changeColor(e.target.style.background);
  };

  return (
    <AddViewerBlock>
      <form className="container" spellCheck="false" onSubmit={onSubmit}>
        <Input
          value={item}
          onChange={onChange}
          placeholder="이달의 목표를 입력하세요!"
          type="text"
          style={{ color: color }}
        />
        <Button type="submit">ADD</Button>
      </form>

      <div className="color-select">
        <div
          className="color one"
          style={{ background: '#fa5252' }}
          onClick={onClick}
        ></div>
        <div
          className="color two"
          style={{ background: '#fab005' }}
          onClick={onClick}
        ></div>
        <div
          className="color three"
          style={{ background: '#20c997' }}
          onClick={onClick}
        ></div>
        <div
          className="color four"
          style={{ background: '#4dabf7' }}
          onClick={onClick}
        ></div>
        <div
          className="color five"
          style={{ background: 'black' }}
          onClick={onClick}
        ></div>
      </div>
    </AddViewerBlock>
  );
};

export default AddViewer;

const AddViewerBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e9ecef;
  padding: 5px 20px 0px;
  margin: 0rem 2.5rem;
  align-items: center;
  .color-select {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 3.2rem;
    margin-bottom: 9px;
    border-radius: 20px;
    width: 45%;
    height: 30px;
    text-align: center;
    .color {
      width: 15px;
      height: 15px;
      border-radius: 100%;
      box-shadow: 20px;
      cursor: pointer;
    }
  }
  .container {
    display: flex;
    padding: 5px;
    margin: 1.5rem 0 0rem;
    width: 90%;
    min-width: 310px;
    max-width: 550px;
    height: 30px;
    align-items: center;
    justify-content: center;
    .icon {
      color: ${palette.green[5]};
      font-size: 28px;
      margin: 10px;
    }
  }
`;
