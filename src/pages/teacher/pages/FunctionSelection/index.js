import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FunctionItemGrid from './view/FunctionItemGrid';
import { menuList } from './dataSet/menuList';

const FunctionList = () => {
    const navigate = useNavigate();

    const onClickFunction = (navigation) => {
        setTimeout(() => navigate(navigation), 300);
    }

    return (
        <Grid container spacing={2} m={2}>
            {
                menuList.map((item, index) => 
                    <FunctionItemGrid key={index}
                        icon={item.icon}
                        text={item.text}
                        variant={'contained'}
                        onClick={() => onClickFunction(item.navigate)}
                    />
                )
            }
        </Grid>
    );
}

export default FunctionList;