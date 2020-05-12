import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdRemoveCircleOutline, MdRadioButtonUnchecked } from 'react-icons/md';
import { IoIosList } from 'react-icons/io';
// import { FaRegKissWinkHeart } from 'react-icons/fa';
import { TiHeartFullOutline } from 'react-icons/ti';
import moment from 'moment';

const AddList = ({
  color,
  lists,
  type,
  results,
  toggle,
  remove,
  selectedDay,
}) => {
  // for (let g = 0; g < lists.length; g++) {
  //   // const h = lists[g].id % 7; // 나머지를 아이디 순서대로 구함.
  //   if(h = )
  // }

  // console.log(lists);
  // const [c, setC] = useState('');
  // if (results.length === '2') {
  //   return;
  //   console.log(lists);
  // } else {
  //   console.log(lists);
  // lists = [];

  // if ((lists = [])) {
  //   for (let n = 0; n < results.length; n++) {
  //     for (let I = 1; I < 8; I++) {
  //       // 1~7
  //       const y = results[n]; // 각각의 result들.
  //       // 0번째 result, 1번째 result
  //       lists.push({
  //         // I: I,
  //         // date: selectedDay
  //         //   .clone()
  //         //   .startOf('week')
  //         //   .add(I - 1, 'day'),
  //         // 2일전~5일후 유산균 1~7  / 2일전~5일전 오메가 8~14 / 2일전~5일전 비타민디 15~21
  //         // 1 8 15 한날에 먹어야 하는 세트. 2 9 16 => id값을 7로 나누었을때 나머지 같은것끼리 묶음.
  //         // .calendar(),
  //         // week: startday.clone.add(i, 'day').format('w'),
  //         // day: startday.clone.add(i, 'day').format('ddd'),
  //         name: y.name,
  //         // checked: c,
  //         color: y.color,
  //         // id: i,
  //         // id: n * 7 + I,
  //         // 0+1 0+1 0+5 0+7 / 7+1 7+2 7+7 / 14+1
  //         // h: id % 7,
  //       });
  //     }
  //   }
  // } else {
  //   return;
  // }

  // }
  // };

  return (
    <AddListBlock>
      <div className="header">
        <div className="icon2">
          <IoIosList />
        </div>
        <p className="title">My Goal</p>
      </div>
      <div className="goal">
        {/* <ul className="list"> */}
        {/* <div className="list-toggle">
            {type === 'calendar'
              ? 
              lists.map(list =>
                  list.date.format('YYYYMMDD') ===
                  selectedDay.format('YYYYMMDD') ? (
                    <div
                      key={list.id}
                      className="toggle"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setC(!c)}
                    >
                      {list.checked ? (
                        <div style={{ color: '#495057' }}>
                          <TiHeartFullOutline />
                        </div>
                      ) : (
                        <div>
                          <MdRadioButtonUnchecked />
                        </div>
                      )}
                    </div>
                  ) : (
                    ''
                  ),
                )
              : ''}
          </div> */}
        <div className="goal-contents">
          {results.map((result) => (
            <li
              id={result.id}
              className="goal-goal"
              style={{ color: result.color }}
            >
              {result.name}
            </li>
          ))}
        </div>
        <div className="goal-remove">
          {results.map((result) => (
            <div>
              {type === 'add' ? (
                <div
                  className="remove"
                  style={{ cursor: 'pointer' }}
                  onClick={() => remove(result.id)}
                >
                  <MdRemoveCircleOutline />
                </div>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
        {/* </ul> */}
      </div>
    </AddListBlock>
  );
};

export default AddList;

const AddListItem = ({ list, a, toggle, remove, type, selectedDay }) => {
  return (
    <AddListItemBlock>
      <div className={type === 'add' ? 'add' : 'calendar'}></div>
    </AddListItemBlock>
  );
};

const AddListBlock = styled.div`
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 30px;
    /* margin-top: 15px; */
    padding: 0;
    .title {
      font-size: 1.05rem;
      text-align: center;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .icon2 {
      font-size: 25px;
      margin-right: 4px;
      margin-top: 5px;
    }
  }
  .goal {
    border: 1px lightgray solid;
    border-radius: 10px;
    /* margin: 0 10px; */
    padding: 13px 18px 17px;
    list-style-type: none;
    /* margin: 0; */
    /* padding: 0; */
    width: 80%;
    display: flex;
    justify-content: center;
    line-height: 1.7rem;
    /* .goal-toggle {
      width: 10%;
      margin: 0;
      margin-top: 5px;
      .toggle {
        margin-bottom: 5px;
        height: 28px;
      }
    } */

    .goal-contents {
      width: 80%;
      margin: 0;
      .goal-goal {
        border-bottom: 1.5px solid lightgray;
        margin-bottom: 3.5px;
        height: 28px;
        font-size: 15px;
        /* margin: 0rem 2.5rem; */
      }
    }
    .goal-remove {
      width: 10%;
      margin: 0;
      .remove {
        height: 28px;
        margin-bottom: 5px;
      }
    }
  }

  .lineThrough {
    text-decoration: line-through #495057;
  }
  .goal-goal {
  }
  background-color: #e9ecef;
  padding: 5px 20px 20px;
  margin: 0rem 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .result {
    padding: 15px;
    border: 1.5px solid lightgray;
    width: 90%;
    max-width: 250px;
    margin: 0rem 1.2rem 0.8rem;
    min-height: 150px;
    text-align: center;
    border-radius: 15px;
  }
`;

const AddListItemBlock = styled.div`
  /* margin: 0 30px 0 0; */
  padding: 3px;
  /* background-color: #e9ecef;
  padding: 5px 20px 0px;
  margin: 0rem 2.5rem;
  
  align-items: center;
  flex-direction: column; */
  display: flex;
  .add {
    padding-left: 10px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    width: 120px;
    font-size: 15px;
    margin: 3px 0px;
    border-bottom: 1px solid lightgray;
  }
  /* flex-direction: column; */
  /* .result {
    width: 100%;
    margin: 10px;
    width: 10%;
    border: 1px solid black;
  } */
  /* } */
`;
