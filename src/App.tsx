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
import AddUserData from './components/views/Auth/AddUserData';
import EditPersonalData from './components/views/EditPersonalData/EditPersonalData';
import PaymentSettings from './components/views/PaymentSettings/PaymentSettings';
import AccountSettings from './components/views/AccountSettings/AccountSettings';
import OrderEvent from './components/views/OrderEvents/OrderEvents';
import OrderDetails from './components/views/UserAcitons/OrderDetails';
import EditOrder from './components/views/UserAcitons/EditOrder';
import WorkerDashboard from './components/views/WorkerDashboard/WorkerDashboard';
import GuestList from './components/views/UserAcitons/GuestList';
import Payment from './components/views/UserAcitons/Payment';
import Pricing from './components/views/WorkerDashboard/Pricing';

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

  // Auth Context
  let role;
  // tu powinien byc const ale eslint jest tak zjebany że nawet tymczasowo nie można consta ustawić bo kurwa jakis overlaps wyskakuje pierdolony eslint
  // eslint-disable-next-line prefer-const
  role = 'Worker'; // 'Worker' | 'User'

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
        {
          path: 'add-user-data',
          element: <AddUserData />,
        },
      ],
    },
    {
      path: '/app',
      children: [
        {
          path: 'dashboard',
          element:
            role === 'User' ? (
              <UserDashboard />
            ) : role === 'Worker' ? (
              <WorkerDashboard />
            ) : (
              ''
            ),
        },
        {
          path: 'edit-personal-data',
          element: <EditPersonalData />,
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
        {
          path: 'guest-list',
          element: <GuestList />,
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'pricing',
          element: <Pricing />,
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
