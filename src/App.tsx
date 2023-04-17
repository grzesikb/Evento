import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './views/Home/Home';
// import { settingsContext } from './context/settingsContext';

const App = () => {
  // const settings = useContext(SettingsContext);
  // const { theme } = settings;

  const Theme = createTheme({
    palette: {
      mode: 'dark',
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
