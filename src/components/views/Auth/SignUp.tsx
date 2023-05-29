import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import Form from './AuthForm';
import Navbar from '../../common/Navbar/Navbar';
import { IAuthSignIn } from '../../../shared/interfaces/auth.interface';

const SignUp = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<IAuthSignIn>({
		email: '',
		password: '',
		repeatPassword: '',
	});
	// const errors = useValidate(data as LoginDataInterface, signInSchema);

	// const { mutateAsync, isSuccess } = useMutation(signInService);
	// const { state, dispatch } = useContext(AuthContext);
	// const navigate = useNavigate();

	// const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
	//   e.preventDefault();
	//   const loginPromise = mutateAsync(data);

	//   await statusNotifier<AxiosResponse>(loginPromise, {
	//     pendingText: 'Logowanie...',
	//     successText: 'Zalogowano!',
	//     toastId,
	//   })
	//     .then((response: AxiosResponse) => {
	//       dispatch({ type: ACTIONS.loadUser, payload: { ...response.data } });
	//     })
	//     .catch((err) => console.log(err));
	// };
	const onSubmit = async () => {
		console.log(data);
		navigate('/auth/add-user-data' as never, { state: data } as never);
	};

	return (
		<Box>
			<Navbar hideMenu />
			<Form
				handleClick={() => onSubmit()}
				text="Sign Up"
				navigateText="Do you have an account? Login now!"
				navigatePath="../auth/signin"
			>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email address"
					name="email"
					autoComplete="email"
					autoFocus
					value={data.email}
					onChange={(e) => setData({ ...data, email: e.target.value })}
				/>

				<TextField
					margin="dense"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					value={data.password}
					onChange={(e) => setData({ ...data, password: e.target.value })}
				/>

				<TextField
					margin="dense"
					required
					fullWidth
					name="repeatPassword"
					label="Repeat your password"
					type="password"
					id="repeatPassword"
					value={data.repeatPassword}
					onChange={(e) => setData({ ...data, repeatPassword: e.target.value })}
				/>
			</Form>
		</Box>
	);
};

export default SignUp;
