import React from "react";

const AddTodo = ({
    addNewTodoHandler,
    onChangeHandler,
    todo,inputRef
}) => {
    return ( <React.Fragment>
        <h1>Add Todo</h1>
        <div className="add-todo">
            <input ref={inputRef} type="text" placeholder="Enter todo here" id="todo-input" value={todo} onChange={onChangeHandler}/>
            <button type="button" id="add-todo" onClick={addNewTodoHandler}>
            Add Todo
            </button>
        </div>
    </React.Fragment>);
}
 
export default AddTodo;