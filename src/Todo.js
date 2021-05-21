import React, {  useContext} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeletIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Edit from "@material-ui/icons/Edit";
import useToggle from "./hooks/useToggle";
import EditTodoForm from './EditTodoForm';
import Divider from "@material-ui/core/Divider";
import { TodoContext } from "./contexts/todos.context";

function Todo({ task, completed, id, }) {
    const{dispatch} = useContext(TodoContext);
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm  id={id} key ={id} task= {task} toggleEditForm={toggle}/>
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => dispatch({type:"TOGGLE",id:id})} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch({type:"REMOVE",id:id})}>
              <DeletIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}> 
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
  
          
        </>
      )}
    </ListItem>
  );
}

export default Todo;
