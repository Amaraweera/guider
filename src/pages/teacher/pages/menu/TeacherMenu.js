import React from "react";
import { Grid } from "@mui/material";
import MenuGrid from "./view/MenuGrid";
import { menuList } from "./dataSet/menuList";

const TeacherMenu = () => {
    return (
        <Grid container spacing={2} m={2}>
            {
                menuList.map((item, index) => 
                    <MenuGrid key={index}
                        icon={item.icon}
                        text={item.text}
                        variant={'contained'}
                    />
                )
            }
        </Grid>
    );
}

export default TeacherMenu;