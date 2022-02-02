import { TextField } from '@mui/material';
import React from 'react';
import useInputState from './hooks/useInputState';

const EditTodoForm = ({editTodo, id, task, toggleEditForm}) => {
    const [value, handleChange, reset] = useInputState(task);
  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleEditForm();
      }}
      style={{width:"100%"}}
      >
          <TextField 
            margin='normal' 
            value={value} 
            onChange={handleChange} 
            fullWidth 
            autoFocus
            />
      </form>
        
 );
};

export default EditTodoForm;
