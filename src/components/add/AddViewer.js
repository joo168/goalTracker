import React from 'react';
import styled from 'styled-components';
import { GiMedicines } from 'react-icons/gi';
import { IoIosList } from 'react-icons/io';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';

const AddViewer = ({
  item,
  color,
  // remove,
  // toggle,
  changeColor,
  changeItem,
  // results,
  setResults,
  // selectedDay,
}) => {
  // const save2 = result => {
  //   let id = 3;
  //   const save_result = {
  //     id: id++,
  //     name: result,
  //     checked: false,
  //   };
  //   try {
  //     localStorage.addItem('item', JSON.stringify(save_result));
  //   } catch (e) {
  //     return undefined;
  //   }
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    changeItem('');

    // changeColor('black');
    // onInsert(item);
    setResults(item, color);
    // save(results);
  };

  const onChange = (e) => {
    changeItem(e.target.value);
  };
  const onClick = (e) => {
    changeColor(e.target.style.background);
  };
  console.log(color);

  // const save = results => {
  //   try {
  //     localStorage.setItem('item', JSON.stringify(results));
  //     console.log('저장성공');
  //   } catch (e) {
  //     console.log('저장실패');
  //     return undefined;
  //   }
  // };

  // const load = () => {
  //   try {
  //     if (localStorage.getItem('item')) {
  //     const result = JSON.parse(localStorage.getItem('item'));
  //     // console.log(result[0].name);
  //     // setResults({
  //     //   id: result[0].id,
  //     //   name: result[0].name,
  //     //   checked: result[0].checked,
  //     // });
  //     // setResults(result);
  //     return result;
  //     // 대신에 일일이 넣어줘봤는데 차이가 있는진 잘..
  //     }
  //     return undefined;
  //   } catch (e) {
  //     return undefined;
  //   }
  // };

  // useEffect(() => {
  //   load();

  //   // setResults(result);
  //   return () => {
  //     save(results);
  //     // console.log(localStorage);
  //     // 왜 따라가는게 한발 느리니...? // 뒷정리 함수. 197
  //   };
  // }, [results]);

  return (
    <AddViewerBlock>
      <form className="container" spellCheck="false" onSubmit={onSubmit}>
        {/* <div className="icon">
          <IoIosList />
        </div> */}
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
      {/* <div className="result"> */}

      {/* </div> */}
    </AddViewerBlock>
  );
};

export default AddViewer;

const AddViewerBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: #e9ecef;
  padding: 5px 20px 0px;
  margin: 0rem 2.5rem;
  align-items: center;
  /* .result { */
  /* border: 1.5px solid lightgray;
    width: 90%;
    max-width: 250px;
    margin: 1rem 1.2rem;
    min-height: 150px;
    text-align: center;
    border-radius: 15px; */
  /* } */
  .color-select {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 3.2rem;
    margin-bottom: 9px;
    /* border: 2px solid lightgray; */
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
