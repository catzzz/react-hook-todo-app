import React,{useContext, memo} from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";
import {DispatchContext} from './contexts/todos.context';

function EditTodoForm({ id,  task, toggleEditForm }) {
    const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // editTodo(id, value);
        dispatch({type:"EDIT",id:id, newTask:value})
        reset();
        toggleEditForm();
      }}
      style={{marginLeft:"1rem", width:"50%"}}
      
    >
      <TextField
        type="text"
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default memo(EditTodoForm);
