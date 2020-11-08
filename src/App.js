import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const listOfitems = (e) => {
    e.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((element, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo App</h1>
        <br />
        <form onSubmit={listOfitems}>
          <input
            type='text'
            placeholder='Add Tasks'
            value={inputList}
            onChange={(e) => setInputList(e.target.value)}
            required></input>
          <button> + </button>
        </form>

        <ul>
          {items.map((item, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                item={item}
                onSelect={deleteItems}></TodoList>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
