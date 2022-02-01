import { Delete, Edit } from '@material-ui/icons';
import { Checkbox, IconButton, ListItem,ListItemSecondaryAction,ListItemText } from '@mui/material';
import React from 'react';

const Todo = ({id, task, completed}) => {
  return (
    <ListItem key={id}>
    <Checkbox tabIndex={-1} checked={completed} />
    <ListItemText style={{textDecoration: completed ? "line-through":"none"}}>{task}</ListItemText>
    <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
            <Delete />
        </IconButton>
        <IconButton aria-label="Edit">
            <Edit />
        </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
