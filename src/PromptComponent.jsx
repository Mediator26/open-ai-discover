import React from "react";
import { useState } from 'react';

function PromptComponent(props) {
    const [message, setMessage] = useState("");
    return (
        <div>
            <h1>Insert a text</h1>
            <input
                type="text"
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}/>
                
            <button onClick={() => props.func(message)}>Send text</button>
        </div>
    )
}

export default PromptComponent;