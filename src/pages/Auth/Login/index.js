import React from 'react';
import { useTheme,styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BasicTextField from '../../../components/TextField/BasicTextField';
import BasicButton from '../../../components/Buttons/Button';
import { Typography } from '@mui/material';

// const BoxContainer = styled(Box)(({ theme }) => ({
//         display: 'flex',
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//         justifyContent: "center",
//         margin: 5,
//         padding: 2,
//         bgcolor: theme.palette.grey[200],
//         borderRadius: 2
//     })
// );

const Login = () => {
    const theme = useTheme();

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={
                {
                    display: 'flex',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    justifyContent: "center",
                    margin: 5,
                    padding: 2,
                    bgcolor: theme.palette.grey[200],
                    borderRadius: 2
                }
            }
        >
            <div>
                <Box>
                    <BasicTextField
                        required
                        id="outlined-required"
                        label="Email"
                        size="small"
                        defaultValue=""
                    />
                </Box>
                <Box>
                    <BasicTextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        size="small"
                        autoComplete="current-password"
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mt: 1,
                        mr: 1,
                        justifyContent: 'right'
                    }}
                >   
                    <BasicButton
                        onClick={() => {}}
                        text='Login'
                    />
                    <Typography
                        variant="caption"
                        sx={{
                            marginTop: 2,
                            marginLeft: 10,
                            color: theme.palette.primary.light
                        }}
                    >
                        Forget password
                    </Typography>
                </Box>
            </div>
        </Box>
    );
}

export default Login;