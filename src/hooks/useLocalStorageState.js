import {useState, useEffect} from 'react';

const useLocalStorageState = (key, defaultVal) => {
    //make piece of state, based off of value in localstorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(
                window.localStorage.getItem(key) || String(defaultVal));
        } catch (error) {
            val = defaultVal;
        }
        return val;
    });

    //useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    },[key,state]);

    return [state, setState];
};

export default useLocalStorageState;

