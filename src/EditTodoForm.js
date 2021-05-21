import React,{useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Edit from "@material-ui/icons/Edit";
import useInputState from "./hooks/useInputState";
import {TodoContext, TodosContext} from './contexts/todos.context';

function EditTodoForm({ id,  task, toggleEditForm }) {
    const {editTodo} = useContext(TodoContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
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

export default EditTodoForm;
