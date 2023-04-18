import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import UserPanel from './views/UserPanel/UserPanel';
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
      <UserPanel />
    </ThemeProvider>
  );
};

export default App;
