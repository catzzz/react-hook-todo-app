import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todo.reducer";
import { v4 as uuidv4 } from "uuid";
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";
// import useToggleState from "../../../context-demo-app-add-initial-components/src/hooks/useToggleState";
// import useTodoState from "../hooks/useTodoState";
const defaultTodos = [
  { id: uuidv4(), task: "Clean Fishtank", completed: false },
  { id: uuidv4(), task: "Wash Car", completed: true },
];
export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  // const todoStuff = useTodoState(defaultTodos);
  //const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  const [todos, dispatch] = useLocalStorageReducer("todos",defaultTodos, todoReducer)
  return (
    <TodoContext.Provider value={ todos }>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodoContext.Provider>
  );
}
