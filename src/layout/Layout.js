import * as React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePageHeader from './Components/HomePageHeader';
import HomePageFooter from './Components/HomePageFooter';
import { Box } from '@mui/system';

const Layout = (props) => {
    const isAuth = true;
    if (isAuth) {
        return (
            <Box sx={{
                // display: 'flex',
                minHeight: '100vh',
                // flexDirection: 'column',
                // justifyContent: 'space-between'
            }}>
                <Header/>
                    <div sx={{
                display: 'flex',
                minHeight: '100%',
                flexDirection: 'column',
                // justifyContent: 'space-between'
            }}>
                        {props.children}
                    </div>
                <Footer/>
            </Box>
        );
    } else {
        return (
            <>
                <HomePageHeader/>
                    {props.children}
                <HomePageFooter/>
            </>
        );
    }
}

export default Layout;