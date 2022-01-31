import { useState } from 'react';

const useToggle = (initialVal = false) => {
    //call usestate
    const [state, setState] = useState(initialVal);
    const toggle = () =>{
        setState(!state);
    };
    //return piece of state and a function to toggle it
    return [state, toggle];
}

export default useToggle;

