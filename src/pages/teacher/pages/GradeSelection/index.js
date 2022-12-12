import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import InstituteGrid from './view/InstituteGrid';
import { menuList } from './dataSet/menuList';

const GradeList = () => {
    const navigate = useNavigate();

    const onClickGrade = () => {
        setTimeout(() => navigate('/teacher/functions'), 500);
    }


    return (
        <Grid container spacing={2} m={2}>
            {
                menuList.map((item, index) => 
                    <InstituteGrid key={index}
                        icon={item.icon}
                        text={item.text}
                        variant={'contained'}
                        onClick={() => onClickGrade()}
                    />
                )
            }
        </Grid>
    );
}

export default GradeList;