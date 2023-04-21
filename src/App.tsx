import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import UserPanel from './views/UserPanel/UserPanel';
import { SettingsContext } from './context/SettingsContext';

import SignIn from './views/Auth/SignIn';
import SignUp from './views/Auth/SignUp';
import Navbar from './components/Navbar';
import AddUserData from './views/AddUserData/AddUserData';

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
      <Container fixed maxWidth="lg">
        <Navbar />
        <UserPanel />
        {/* <SignIn /> */}
        {/* <AddUserData /> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
