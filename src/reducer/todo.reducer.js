import { v4 as uuidv4 } from "uuid";
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //{type:"ADD", task:"Walk the dog"}
      return [...state, { id: uuidv4(), task: action.task, completed: false }];

    case "REMOVE":
      //{type:"Remove", id:"12312"}
      return state.filter((todo) => todo.id !== action.id);

    case "TOGGLE":
      //{type:"Toggle", id:"12312"}
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      //{type:"EDIT", id:"12312312",newTask:"asdsads"}
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
        return state;
  }
};


export default  todoReducer;