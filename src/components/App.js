import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [itemList, setItemList] = useState([]);

  function addNewItem(item) {
    // setItemList([...itemList, item]);
    setItemList((prev) => [...prev, item]);
  }

  function handledelete(id, item) {
    // console.log("Item got deleted");
    setItemList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="main">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          {/* <input onChange={addItem} type="text" value={item} />
          <button onClick={addNewItem}>
            <span>Add</span>
          </button> */}

          <InputArea onAdd={addNewItem} />
        </div>
        <div>
          <ul>
            {itemList.map((item, index) => <ToDoItem key={index} id={index} text={item} onChecked={handledelete} />)}
          </ul>
        </div>
      </div>
    </div>

  );
}

export default App;
