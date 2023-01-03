import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Link,
    List,
    Button,
    Drawer,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const TemporaryDrawer = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { anchor, drawerOpen, handleDrawer } = props;

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        handleDrawer(false);
    };

    const navigation = (routeName) => {
        navigate(routeName);
        handleDrawer(false);
    }

  const list = () => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        // onClick={toggleDrawer()}
        // onKeyDown={toggleDrawer()}
    >
        <List>

            <ListItem disablePadding>
                <ListItemButton onClick={() => navigation('/')}>
                    <ListItemIcon 
                        sx={{
                            color: theme.palette.primary.light
                        }}
                    >
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    {/* <ListItemText secondary={'Home'} /> */}
                    <Link
                        href='/'
                        component="button"
                        variant="body2"
                        underline="none"
                    >
                        Home
                    </Link>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => navigation('/teacher/grade')}>
                    <ListItemIcon 
                        sx={{
                            color: theme.palette.primary.light
                        }}
                    >
                    <SchoolRoundedIcon />
                    </ListItemIcon>
                        <Link
                            href='/'
                            component="button"
                            variant="body2"
                            underline="none"
                        >
                        My Institutes
                        </Link>
                    </ListItemButton>
            </ListItem>

        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon 
                        sx={{
                            color: theme.palette.primary.light
                        }}
                    >
                        <MailIcon />
                    </ListItemIcon>
                    <Link
                        href='/'
                        component="button"
                        variant="body2"
                        underline="none"
                    >
                    Menu
                    </Link>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
            <Drawer
                anchor={anchor}
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;
