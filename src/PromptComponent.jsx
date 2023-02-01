import React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';

function PromptComponent(props) {
    const [message, setMessage] = useState("");
    return (
        <Box sx={{ width: '75%' }}>
            <h1>Insert a text</h1>
            <TextField
                variant="standard"
                fullWidth
                type="text"
                id="message"
                name="message"
                sx={{ m: 2 }} 
                onChange={(e) => {
                    setMessage(e.target.value)
                }
                } />

            <Button
                variant="contained"
                onClick={() => {
                    props.func(message)
                }}>
                Send text
            </Button>

        </Box>
    )
}

export default PromptComponent;