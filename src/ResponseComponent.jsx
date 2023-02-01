import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
function ResponseComponent(props){
    const responseListItems = props.messages.map((r) => {
        return (
            <Card sx={{ m: 2 }} >
                <CardContent>
                <Typography variant="h6" key={r.messageSent} >
                    {r.messageSent}
                </Typography>
                <Typography variant="body1" key={r.messageSent} >
                    { r.response }
                </Typography>
                </CardContent>
            </Card>
        );
    });
    return(
        <Box sx={{ width: '75%' }}>
            {responseListItems}
        </Box>
    )
}
export default ResponseComponent;