import React ,{createContext} from "react";
import { v4 as uuidv4 } from 'uuid';
// import useToggleState from "../../../context-demo-app-add-initial-components/src/hooks/useToggleState";
import useToggle from '../hooks/useToggle';
const defaultTodos = [
    { id: uuidv4(), task: "Clean Fishtank", completed: false },
    { id: uuidv4(), task: "Was Car", completed: true },

]
export const TodoContext = createContext();

export function TodoProvider(props) {
    const todoStuff = useToggle(defaultTodos);
    return(
        <TodoContext.Provider value = {todoStuff}>
            {props.children}
        </TodoContext.Provider>
    );
}
