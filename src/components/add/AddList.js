import React from 'react';
import styled from 'styled-components';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { IoIosList } from 'react-icons/io';

const AddList = ({
  color,
  lists,
  type,
  results,
  toggle,
  remove,
  selectedDay,
}) => {
  return (
    <AddListBlock>
      <div className="header">
        <div className="icon2">
          <IoIosList />
        </div>
        <p className="title">My Goal</p>
      </div>
      <div className="goal">
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
    padding: 13px 18px 17px;
    list-style-type: none;
    width: 80%;
    display: flex;
    justify-content: center;
    line-height: 1.7rem;
    .goal-contents {
      width: 80%;
      margin: 0;
      .goal-goal {
        border-bottom: 1.5px solid lightgray;
        margin-bottom: 3.5px;
        height: 28px;
        font-size: 15px;
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
  padding: 3px;
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
`;
