import { useEffect, useState, MouseEvent } from 'react';
import {
	Alert,
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Form from './AuthForm';
import Navbar from '../../common/Navbar/Navbar';
import { IAuth } from '../../../shared/interfaces/auth.interface';
import { useMutation } from 'react-query';
import {
	identifyService,
	refreshService,
	signInService,
} from '../../../services/authService';

const SignIn = () => {
	const [data, setData] = useState<IAuth>({
		email: '',
		password: '',
	});

	const {
		mutate,
		isSuccess,
		data: responseData,
		isError,
		error,
	} = useMutation(signInService);

	const {
		mutate: refreshMutate,
		isSuccess: refreshSuccess,
		data: refreshData,
		isError: refreshIsError,
		error: refreshError,
	} = useMutation(refreshService);

	const {
		mutate: identifyMutate,
		isSuccess: identifySuccess,
		data: identifyData,
		isError: identifyIsError,
		error: identifyError,
	} = useMutation(identifyService);

	const onSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		console.log(data);
		mutate(data);
	};
	useEffect(() => {
		if (isSuccess && responseData) {
			refreshMutate(responseData.data.refresh_token);
		}
	}, [isSuccess, responseData]);

	useEffect(() => {
		if (refreshSuccess) {
			localStorage.setItem('accessToken', refreshData.data.access_token);
			localStorage.setItem('refreshToken', refreshData.data.refresh_token);

			identifyMutate(refreshData.data.access_token);
		}
	}, [refreshSuccess]);
	// if (state.user) {
	// 	navigate('../../home');
	// }

	useEffect(() => {
		if (identifySuccess) {
			console.log(identifyData);
		}
	}, [identifySuccess]);

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<Box>
			<Navbar hideMenu />
			<Form
				handleClick={(e) => onSubmit(e)}
				text="Sign In"
				navigateText="Don't have an account? Create account now!"
				navigatePath="../auth/signup"
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
				<FormControl sx={{ mt: 1 }} variant="outlined">
					<InputLabel htmlFor="outlined-adornment-password">
						Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}
					/>
				</FormControl>
			</Form>
			{isError && (
				<Alert severity="error">{(error as any).response.data.detail}</Alert>
			)}
		</Box>
	);
};

export default SignIn;
