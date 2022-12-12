import React from "react";
import { Button } from "@mui/material";

const BasicButton = (props) => {
    return (
        <Button
            color="secondary"
            variant="contained"
            startIcon={props.icon ? props.icon : null}
            onClick={() => props.onClick()}
        >
            {props.text}
        </Button>
    );
}

export default BasicButton;