import { Delete, Edit } from '@mui/icons-material'
import { Checkbox, IconButton, ListItem,ListItemSecondaryAction,ListItemText } from '@mui/material';
import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle';

const Todo = ({ task, completed, removeTodo, toggleTodo, id, editTodo}) => {
  const [isEditing, toggle] = useToggle(false); 
  return (
    <ListItem key={id} style={{height:'64px'}}>
      {
        isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/> :
      <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{textDecoration: completed ? "line-through":"none"}}>{task}</ListItemText>
          <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
            <Delete />
        </IconButton>
        <IconButton aria-label="Edit" onClick={toggle}>
            <Edit />
        </IconButton>
    </ListItemSecondaryAction>
      </>
     }
    </ListItem>
 
  );
};

export default Todo;
