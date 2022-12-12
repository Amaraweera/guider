import React from 'react';
import { Grid } from '@mui/material';
import InstituteGrid from './view/InstituteGrid';
import { menuList } from './dataSet/menuList';

const FunctionList = () => {

    const onClickGrade = () => {
        // alert('Succcess');
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

export default FunctionList;