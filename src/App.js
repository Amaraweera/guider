import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import RouteConfig from './routes/route';

import './style/index.scss';
import { mainTheme } from './style/theme/theme';

const theme = createTheme({
  palette: mainTheme.palette
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <RouteConfig/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
