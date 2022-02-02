import { List, Divider } from '@material-ui/core';
import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  return (
    <List>
      {todos.map((todo, idx) => (
        <React.Fragment key={todo.id}>
              <Todo
              {...todo}
              key={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              />
          {idx < todos.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TodoList;
