import { Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import React from 'react';

const TodoList = (props) => {
  return (
    <Paper>
        <List>
        {props.todos.map(todo => (
            <ListItem>
              <ListItemText>
              {todo.task}
            </ListItemText>  
            </ListItem>
        ))}
        </List>
       
    </Paper>
  );
};

export default TodoList;
