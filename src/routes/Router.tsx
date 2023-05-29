import { useContext } from 'react';
import UserContext from '../contexts/context/UserContext';
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import { Payment } from '@mui/icons-material';
import AccountSettings from '../components/views/AccountSettings/AccountSettings';
import AdminDashboard from '../components/views/AdminDashboard/AdminDashboard';
import EditAppEmails from '../components/views/AdminDashboard/EditAppEmails';
import AddUserData from '../components/views/Auth/AddUserData';
import SignIn from '../components/views/Auth/SignIn';
import SignUp from '../components/views/Auth/SignUp';
import EditPersonalData from '../components/views/EditPersonalData/EditPersonalData';
import OrderEvent from '../components/views/OrderEvents/OrderEvents';
import PaymentSettings from '../components/views/PaymentSettings/PaymentSettings';
import EditOrder from '../components/views/UserAcitons/EditOrder';
import GuestList from '../components/views/UserAcitons/GuestList';
import OrderDetails from '../components/views/UserAcitons/OrderDetails';
import UserDashboard from '../components/views/UserDashboard/UserDashboard';
import Pricing from '../components/views/WorkerDashboard/Pricing';
import WorkerDashboard from '../components/views/WorkerDashboard/WorkerDashboard';
import GuestRoute from './GuestRoute';
import AuthRoute from './AuthRoute';

const Router = () => {
	const { state } = useContext(UserContext);

	if (state?.user === null) return <></>;

	// Auth Context
	let role;
	// tu powinien byc const ale eslint jest tak zjebany że nawet tymczasowo nie można consta ustawić bo kurwa jakis overlaps wyskakuje pierdolony eslint
	// eslint-disable-next-line prefer-const
	role = 'User'; // 'Worker' | 'User' | 'Admin'

	const router = createBrowserRouter([
		{
			path: '/auth',
			element: <GuestRoute />,
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
			element: <AuthRoute />,
			children: [
				{
					path: 'dashboard',
					element:
						(role === 'User' && <UserDashboard />) ||
						(role === 'Worker' && <WorkerDashboard />) ||
						(role === 'Admin' && <AdminDashboard />),
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
				{
					path: 'edit-app-emails',
					element: <EditAppEmails />,
				},
			],
		},
		{ path: '/', element: <Navigate to="/auth/signin" /> },
	]);

	return <RouterProvider router={router} />;
};

export default Router;