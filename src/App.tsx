import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import dayjs from 'dayjs';

import UserPanel from './views/UserPanel/UserPanel';
import { SettingsContext } from './context/SettingsContext';
import SignIn from './views/Auth/SignIn';
import SignUp from './views/Auth/SignUp';
import Navbar from './components/Navbar';
import AddUserData from './views/AddUserData/AddUserData';
import EditPersonalData from './views/EditPersonalData/EditPersonalData';
import PaymentSettings from './views/PaymentSettings/PaymentSettings';
import AccountSettings from './views/AccountSettings/AccountSettings';

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

  const test = dayjs('12/03/2022');

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container fixed maxWidth="lg">
        <Navbar />
        {/* <UserPanel /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <AddUserData /> */}
        {/* <EditPersonalData
          data={{
            firstName: 'Bartek',
            lastName: 'Gruszka',
            dateOfBirth: test,
            phoneNumber: 999999999,
            street: 'Ala ma kota',
            houseNumber: '4A',
            city: 'Kielce',
            postalCode: '25-561',
            voivodeship: 'świętokrzyskie',
            country: 'Polska',
          }}
          onBack={handleClick}
        /> */}
        {/* <PaymentSettings onBack={handleClick} /> */}
        {/* <AccountSettings onBack={handleClick} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
