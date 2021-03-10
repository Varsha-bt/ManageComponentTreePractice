import "./styles.css";
import React, { useState } from "react";
import ToDoItem from "./todoitem";

export default function App() {
  const[inputText,setInputText]=useState("");

  const [items,setItems]=useState([]);

  function handleChange(event){
    const newValue=event.target.value;
    setInputText(newValue);
  }

  function addItem(event){
    setItems(prevItems=>{
      return[...prevItems,inputText];
    });
    setInputText("");

  }

  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter(
        (items,index)=>{
          return index!==id;
        });
     

     
    });
  }

  return (
    <div className="container">
      <div className="heading">
      <h1>To Do List</h1>
      </div>
      <div className="form">
        <input
         type="text"
         onChange={handleChange}
         value={inputText}
         />
        <button onClick={addItem}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index)=>(
          <ToDoItem key={index} id={index}text={todoItem} onChecked={deleteItem}/>
          ))
          }
        </ul>
      </div>
      
    </div>
  );
}
