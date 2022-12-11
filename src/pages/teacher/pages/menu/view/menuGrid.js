import React from "react";
import { Grid } from "@mui/material";
import BasicButton from "../../../../../components/Buttons/Button";

const MenuGrid = (props) => {
    return (
        <Grid item xs={3} md={3}>
            <BasicButton
                {...props}
            />
        </Grid>
    );
}

export default MenuGrid;