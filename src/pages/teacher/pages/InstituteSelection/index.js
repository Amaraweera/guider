import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import InstituteGrid from './view/InstituteGrid';
import { menuList } from './dataSet/menuList';

const InstituteList = () => {
    const navigate = useNavigate();

    const onClickInstitute = () => {
        setTimeout(() => navigate('/teacher/grade'), 300);
    }

    return (
        <Grid container spacing={2} m={2}>
            {
                menuList.map((item, index) => 
                    <InstituteGrid key={index}
                        icon={item.icon}
                        text={item.text}
                        variant={'contained'}
                        onClick={() => onClickInstitute()}
                    />
                )
            }
        </Grid>
    );
}

export default InstituteList;