import { TextField } from '@mui/material';
import React from 'react';
import useInputState from './hooks/useInputState';

const TodoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState("");

    return (
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();}}>
                <TextField
                margin='normal'
                label='Add New Todo'
                fullWidth value={value} onChange={handleChange} />
            </form>
    );
};

export default TodoForm;
