import React from "react";

const TodoList = ({ id, item, onSelect }) => {
  return (
    <div className='todo_style'>
      <div className='icon'>
        <i
          className='fas fa-times-circle'
          onClick={() => {
            onSelect(id);
          }}></i>
      </div>
      <div className='list_item'>
        <li>{item}</li>
      </div>
    </div>
  );
};

export default TodoList;
