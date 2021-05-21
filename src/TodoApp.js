import React, { useState , useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import useTodoState from './hooks/useTodoState';
import useLocalStorageState from './hooks/useLocalStorageState';
import {TodoProvider, TodosProvider} from './contexts/todos.context';


function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos")|| "[]");
//     const initialTodos = [
//     { id: uuidv4(), task: "Clean Fishtank", completed: false },
//     { id: uuidv4(), task: "Was Car", completed: true },
//     { id: uuidv4(), task: "Grow Beard", completed: false },
//   ];
  const{todos, addTodo,removeTodo,toggleTodo,editTodo} = useTodoState(initialTodos)

//   const [todos, setTodos] = useState(initialTodos);

  useEffect(()=>{
      window.localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={2}
    >
      <AppBar color="primary" position="static" sytle={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit"> TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{marginTop:"1rem"}}>
        <Grid item xs={11} md={8} lg={4}>
           <TodoProvider>
               
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo = {removeTodo} toggleTodo= {toggleTodo} editTodo = {editTodo}/>
          </TodoProvider> 
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
