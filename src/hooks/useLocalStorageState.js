import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal){

    // make piece of state , based of value in localstorage
    const[state, setState] = useState(()=>{
        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal)) ;
    }catch(e){
            val = defaultVal;
        }
        return val;
    });
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state));
    },[state]);
    //use useEfect to update localstorage
    return [state, setState];
}

export default useLocalStorageState;