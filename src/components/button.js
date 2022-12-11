import React from "react";
import { Button } from "@mui/material";
import { HowToRegRounded } from '@mui/icons-material';

const ButtonComponent = (props) => {
    console.log(props);
    return (
        <Button variant="contained" startIcon={<HowToRegRounded/>}>
            {props.text}
        </Button>
    );
}

export default ButtonComponent;