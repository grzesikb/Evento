import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import AppContainer from '../../common/AppContainer';

import { IAccountSettings } from '../../../shared/interfaces/auth.interface';
import { useMutation } from 'react-query';
import { changePasswordService } from '../../../services/userService';

const AccountSettings = () => {
	const [accountSettings, setAccountSettings] = useState<IAccountSettings>({
		oldPassword: '',
		newPassword: '',
		repeatPassword: '',
	});

	const { mutate, isSuccess, data, error, isError } = useMutation(
		changePasswordService
	);

	const navigate = useNavigate();
	const handleResetPassword = async () => {
		mutate({
			access_token: localStorage.getItem('accessToken') as string,
			userData: {
				password: accountSettings.newPassword,
				old_password: accountSettings.oldPassword,
			},
		});
	};

	useEffect(() => {
		if (isSuccess && data.data.payload === null) {
			console.log(data);
			setTimeout(() => {
				navigate('/app/dashboard');
			}, 3000);
		}
	});

	useEffect(() => {
		if (isError) {
			console.log(error);
		}
	});
	return (
		<AppContainer back="/app/dashboard" label="Account Settings" navbar>
			<Box component="form">
				<Grid container sx={{ width: 400 }}>
					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="oldPassword"
							label="Old password"
							name="oldPassword"
							value={accountSettings.oldPassword}
							onChange={(e) =>
								setAccountSettings({
									...accountSettings,
									oldPassword: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="newPassword"
							label="New password"
							name="newPassword"
							value={accountSettings.newPassword}
							onChange={(e) =>
								setAccountSettings({
									...accountSettings,
									newPassword: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="repeatPassword"
							label="Repeat new password"
							name="repeatPassword"
							value={accountSettings.repeatPassword}
							onChange={(e) =>
								setAccountSettings({
									...accountSettings,
									repeatPassword: e.target.value,
								})
							}
						/>
					</Grid>
				</Grid>
				<Button
					variant="contained"
					sx={{ fontWeight: 600, mt: 3 }}
					onClick={handleResetPassword}
				>
					Reset password
				</Button>
			</Box>
			{isSuccess && data.data.payload === null && (
				<Alert severity="success">
					Profil został edytowany! Za chwile nastąpi odświeżenie...
				</Alert>
			)}
			{isSuccess && data.data.payload === 'Unauthorized' && (
				<Alert severity="error">Błędne stare hasło</Alert>
			)}
		</AppContainer>
	);
};

export default AccountSettings;
