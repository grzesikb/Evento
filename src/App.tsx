import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './views/Home/Home';
import { SettingsContext } from './context/SettingsContext';

const App = () => {
  const { theme } = useContext(SettingsContext);

  const Theme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === 'light' ? '#081a2d' : '#272727',
      },
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
