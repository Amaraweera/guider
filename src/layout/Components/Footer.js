import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const Footer = () => {
    const theme = useTheme();

    return (
        <Paper 
            sx={{
                marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                bgcolor: theme.palette.primary.main
            }}
            square variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                        marginTop: 2,
                    }}
                >
                    <Typography variant="caption" sx={{color: theme.palette.primary.contrastText}}>
                        Copyright ©2022. Guider
                    </Typography>
                </Box>
            </Container>
    </Paper>
    );
}

export default Footer;