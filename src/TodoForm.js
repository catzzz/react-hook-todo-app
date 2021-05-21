import React,{useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
import {TodoContext, TodosContext} from './contexts/todos.context';

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const {addTodo} = useContext(TodoContext)
  return (
    <Paper style={{margin:"1rem 0", padding:"0 1rem"}}>
      <form onSubmit={(e)=>{
          e.preventDefault();
          addTodo(value);
          reset();
      }}>
        <TextField value={value} onChange={handleChange} margin="normal" label="Add new Todo"/>
      </form>
    </Paper>
  );
}

export default TodoForm;
