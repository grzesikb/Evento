import React, { useContext, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import dayjs from 'dayjs';

import UserDashboard from './components/views/UserDashboard/UserDashboard';
import { SettingsContext } from './contexts/context/SettingsContext';
import SignIn from './components/views/Auth/SignIn';
import SignUp from './components/views/Auth/SignUp';
import AddUserData from './components/views/AddUserData/AddUserData';
import EditPersonalData from './components/views/EditPersonalData/EditPersonalData';
import PaymentSettings from './components/views/PaymentSettings/PaymentSettings';
import AccountSettings from './components/views/AccountSettings/AccountSettings';
import OrderEvent from './components/views/OrderEvents/OrderEvents';
import OrderDetails from './components/views/UserAcitons/OrderDetails';
import EditOrder from './components/views/UserAcitons/EditOrder';

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

  const handleBack = () => {};

  const router = createBrowserRouter([
    {
      path: '/auth',
      children: [
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
      ],
    },
    {
      path: '/app',
      children: [
        {
          path: 'dashboard',
          element: <UserDashboard />,
        },
        {
          path: 'edit-personal-data',
          element: (
            <EditPersonalData
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
            />
          ),
        },
        {
          path: 'payments-settings',
          element: <PaymentSettings />,
        },
        {
          path: 'account-settings',
          element: <AccountSettings />,
        },
        {
          path: 'order-event',
          element: <OrderEvent />,
        },
        {
          path: 'order-details',
          element: <OrderDetails />,
        },
        {
          path: 'edit-order',
          element: <EditOrder />,
        },
      ],
    },
    { path: '/', element: <Navigate to="/auth/signin" /> },
  ]);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container fixed maxWidth="lg">
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
