import React from "react";
import { Button } from "@mui/material";

const BasicButton = (props) => {
    return (
        <Button variant="contained" startIcon={props.icon}>
            {props.text}
        </Button>
    );
}

export default BasicButton;