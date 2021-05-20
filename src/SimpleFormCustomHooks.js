import React from "react";
import useInputState from "./hooks/useInputState";

export default function SimpleFormCustomHooks(){
    const [email, updateEmail , resetEmail] = useInputState("");
    return(
        <div>
        <h1>You enter: {email}</h1>
        <input type="text" value={email} onChange={updateEmail}></input>
        <button onClick={resetEmail}>Submit</button>
    </div>
    )
}