import React,{useState} from 'react';
import useToggle from './hooks/useToggle'

function Toggler(){
    const[isHappy, setIsHappy] = useState(true);
    const[isHeartBroken, setHeartBroken] = useState(false);
    const toggle =()=>{
        setIsHappy(!isHappy)
    }
    const toggleHeartBroken =()=>{
        setHeartBroken(!isHeartBroken)
    }
    
    const[isDog, toggleIsDog] = useToggle(false);
    return (
        <div>
            <h1 onClick={toggle}>{isHappy ? "😄" : "😩"}</h1>
            <h1 onClick={toggleHeartBroken}>{isHeartBroken ? "🥰" : "🥵"}</h1>
            {/* custom hooks funciton */}
            <h1 onClick={toggleIsDog}>{isDog ? "🐶" : "🐸"}</h1>

        </div>
            )
        
}

export default Toggler;