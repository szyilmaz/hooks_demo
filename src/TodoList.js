import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <List>
      {props.todos.map(todo => (
        <React.Fragment>
              <Todo task={todo.task} key={todo.id} completed={todo.completed} />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default TodoList;
