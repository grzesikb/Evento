import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import Form from './AuthForm';
import Navbar from '../../common/Navbar/Navbar';
import { IAuthSignIn } from '../../../shared/interfaces/auth.interface';
import {Validator} from '../../../tools/Validator';

const SignUp = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<IAuthSignIn>({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const validateForm = async () => {
		const emailError = await Validator.checkEmail(data.email);
		const passwordError = await Validator.checkPassword(data.password, true);
		const repeatPassword = await Validator.checkRepeatPassword(data.password, data.repeatPassword)
		setErrors({
			email: emailError ?? '',
			password: passwordError ?? '',
			repeatPassword: repeatPassword ?? '',
		})
		return !(emailError || passwordError || repeatPassword)
	};
	
	const onSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		console.log(data);
		if(await validateForm()){
			navigate('/auth/add-user-data' as never, { state: data } as never);
		}
	};

	return (
		<Box>
			<Navbar hideMenu />
			<Form
				handleClick={(e) => onSubmit(e)}
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
					error={!!errors.email}
					helperText={errors.email}
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
					error={!!errors.password}
					helperText={errors.password}
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
					error={!!errors.repeatPassword}
					helperText={errors.repeatPassword}
				/>
			</Form>
		</Box>
	);
};

export default SignUp;
