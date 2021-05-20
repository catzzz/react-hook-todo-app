import React,{useState, useEffect} from 'react';

export default function Clicker(){
    const [count, setCount] = useState(0);
    useEffect(()=>(document.title = `you clicked ${count}`))
    return (
        <div>
             {/* <button onClick={setCount(count+1)}> Click me : {count}</button> */}
             <h1> Click : {count}</h1>
             <button onClick={()=> setCount(count+1)}> Click me </button>
        </div>
       
    )
}
