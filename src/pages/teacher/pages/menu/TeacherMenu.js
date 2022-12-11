import React from "react";
import { Grid } from "@mui/material";
import MenuGrid from "./view/menuGrid";
import { HowToRegRounded } from '@mui/icons-material';

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

const menuList = [
    {
        icon: <HowToRegRounded/>,
        text: 'Student Registration'
    },
    {
        icon: <HowToRegRounded/>,
        text: 'Add my new class'
    }
];

export default TeacherMenu;