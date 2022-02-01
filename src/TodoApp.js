import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography }   from '@mui/material';
import TodoList from './TodoList';
//import { Menu } from "@material-ui/icons";

const TodoApp = () => {
    const initialTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);
  return (
      <Paper style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
      }}
      elevation={0}
      >
          <AppBar color='primary' position='static' style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
          </AppBar>
          <TodoList todos={todos} />
      </Paper>
  );
};

export default TodoApp;

//-TodoApp
//  -TodoFrom
//  -TodoList
//      -TodoItem
