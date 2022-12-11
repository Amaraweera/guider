import React from "react";
import { Grid } from "@mui/material";
import ButtonComponent from "../../../../../components/button";

const MenuGrid = (props) => {
    return (
        <Grid item xs={3} md={3}>
            <ButtonComponent
                {...props}
            />
        </Grid>
    );
}

export default MenuGrid;