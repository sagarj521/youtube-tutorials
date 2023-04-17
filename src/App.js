import React, { useRef } from "react";
import { useState } from "react";
import AddTodo from "./addTodo";

const App = () => {

  const inputRef = useRef(null)
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  const addNewTodoHandler = () => {

    if(!todo) {
      inputRef.current.focus()
      return false
    }

    setTodoList((preState)=>{
      return [todo, ...preState]
    })
    setTodo('')
  }

  const deleteHandler = (index)=> {
    const updatedTodoList = todoList.filter((todo, i) => {
      return i !== index
    })

    setTodoList(updatedTodoList)
  }

  const onChangeHandler = (e)=>{
    setTodo(e.target.value)
  }

  return (
    <div className="container">
      <AddTodo 
        onChangeHandler={onChangeHandler}
        todo={todo}
        addNewTodoHandler={addNewTodoHandler}
        inputRef={inputRef}
      />
      {/* <h1>Add Todo</h1>
      <div className="add-todo">
        <input ref={inputRef} type="text" placeholder="Enter todo here" id="todo-input" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="button" id="add-todo" onClick={addNewTodoHandler}>
          Add Todo
        </button>
      </div> */}
      <h1>Todo List</h1>
      <ul id="todo-list">
        {todoList.length > 0 ? todoList.map((todo, index)=>{
          return <li key={index}>
                  <span>{todo}</span>
                  <button onClick={() =>deleteHandler(index)}>Delete</button>
                </li>
        }): 
        <li>No records found</li>}
        {/* <li>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Do laundry</span>
          <button>Delete</button>
        </li> */}
      </ul>
    </div>
  );
};

export default App;
