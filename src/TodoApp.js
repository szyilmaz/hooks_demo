import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material'
import TodoList from './TodoList';
import { Paper } from '@mui/material';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';

const TodoApp = () => {
    const initialTodos = [];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

   
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "white"
        }}
            elevation={0}
        >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TODO LIST
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <TodoForm addTodo={addTodo} />
                <TodoList 
                todos={todos} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo} 
                editTodo={editTodo}
                />
            </Box>
        </Paper>
    );
};

export default TodoApp;

//-TodoApp
//  -TodoFrom
//  -TodoList
//      -TodoItem
