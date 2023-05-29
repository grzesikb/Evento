import React, { useContext, useEffect, useState } from 'react';
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
import AdminDashboard from './components/views/AdminDashboard/AdminDashboard';
import EditAppEmails from './components/views/AdminDashboard/EditAppEmails';
import { Api } from './tools/Api';
import Router from './routes/Router';
import { useMutation } from 'react-query';
import { identifyService } from './services/authService';
import UserContext from './contexts/context/UserContext';
import { UserActions } from './shared/interfaces/user.interface';

const App = () => {
	const { theme } = useContext(SettingsContext);
	const { state, dispatch } = useContext(UserContext);

	const { mutate, data, isSuccess, isError } = useMutation(identifyService);

	useEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			dispatch({ type: UserActions.LOAD_USER, payload: undefined });
		} else {
			mutate(localStorage.getItem('accessToken') as string);
		}
	}, []);

	useEffect(() => {
		if (isSuccess)
			dispatch({ type: UserActions.LOAD_USER, payload: data.data });
		if (isError) dispatch({ type: UserActions.LOAD_USER, payload: undefined });
	}, [isSuccess, isError]);

	const Theme = createTheme({
		palette: {
			mode: theme,
			primary: {
				main: theme === 'light' ? '#081a2d' : '#272727',
			},
		},
	});

	useEffect(() => {
		(async () => {
			await Api.initAxios();
		})();
	}, []);

	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<Container fixed maxWidth="lg">
				<Router />
			</Container>
		</ThemeProvider>
	);
};

export default App;
