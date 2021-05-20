import React, { useState } from "react";
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

function Todo({ task, completed, removeTodo, id, toggleTodo ,editTodo}) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} id={id} key ={id} task= {task} toggleEditForm={toggle}/>
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
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
