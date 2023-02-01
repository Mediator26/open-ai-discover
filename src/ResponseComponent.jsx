import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import logoMic from './assets/mic-logo.png';

function ResponseComponent(props) {
    const responseListItems = props.messages.map((r) => {
        return (
            <Card key={r.messageSent} sx={{ m: 2 }} >
                <CardContent>
                    <Typography variant="h6">
                        {r.messageSent}
                    </Typography>
                    <Typography 
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="row" variant="h6"
                        sx={{ width: "100%" }}>
                    <Avatar
                        alt="MIC Belgique"
                        src={logoMic}
                        sx={{ width: 56, height: 56 }} />
                        {r.response}
                    </Typography>
                </CardContent>
            </Card>
        );
    });
    return (
        <Box sx={{ width: '75%' }}>
            {responseListItems}
        </Box>
    )
}
export default ResponseComponent;