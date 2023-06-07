import React, { useContext, useEffect, useState } from 'react';
import { Button, Grid, TextField, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import {
	IPayment,
	IPaymentInfo,
	PaymentActions,
} from '../../../shared/interfaces/payment.interface';
import PaymentContext from '../../../contexts/context/PaymentContext';
import { useMutation } from 'react-query';
import { createPaymentDataService } from '../../../services/paymentService';

const PaymentSettings = () => {
	const { state, dispatch } = useContext(PaymentContext);

	const [payment, setPayment] = useState<IPaymentInfo>({
		name: state?.payment_info ? state.payment_info.name : '',
		surname: state?.payment_info ? state.payment_info.surname : '',
		number: state?.payment_info ? state.payment_info.number : '',
		expiration_date: state?.payment_info
			? state.payment_info.expiration_date
			: '',
		CCV: state?.payment_info ? state.payment_info.CCV : '',
		id: state?.payment_info ? state.payment_info.id : '',
	});
	const defaultPayment = {
		name: state?.payment_info ? state.payment_info.name : '',
		surname: state?.payment_info ? state.payment_info.surname : '',
		number: state?.payment_info ? state.payment_info.number : '',
		expiration_date: state?.payment_info
			? state.payment_info.expiration_date
			: '',
		CCV: state?.payment_info ? state.payment_info.CCV : '',
		id: state?.payment_info ? state.payment_info.id : '',
	};

	console.log(state);

	const { mutate, data, isSuccess } = useMutation(createPaymentDataService);

	React.useEffect(() => {
		setPayment(defaultPayment);
	}, []);

	const navigate = useNavigate();

	const handlePaymentSettings = async () => {
		mutate({
			access_token: localStorage.getItem('accessToken') as string,
			paymentData: payment,
		});
	};

	useEffect(() => {
		if (isSuccess) {
			localStorage.setItem('paymentData', JSON.stringify(data.data.payload));
			dispatch({
				type: PaymentActions.CREATE_DATA,
				payload: data.data.payload,
			});
		}
	}, [isSuccess]);

	return (
		<AppContainer back="/app/dashboard" label="Payment Settings" navbar>
			<Box component="form">
				<Grid container>
					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="name"
							label="Name"
							name="name"
							autoComplete="name"
							autoFocus
							value={payment.name}
							onChange={(e) => setPayment({ ...payment, name: e.target.value })}
						/>
					</Grid>
					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="surname"
							label="surname"
							name="surname"
							autoComplete="name"
							autoFocus
							value={payment.surname}
							onChange={(e) =>
								setPayment({ ...payment, surname: e.target.value })
							}
						/>
					</Grid>
					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="creditCardNumber"
							label="Credit Card Number"
							name="creditCardNumber"
							// autoComplete="cc-number"
							autoFocus
							value={payment.number}
							onChange={(e) =>
								setPayment({ ...payment, number: e.target.value })
							}
						/>
					</Grid>
					<Grid item sm={3}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="expires"
							label="Expires"
							name="expires"
							// autoComplete="cc-exp"
							autoFocus
							value={payment.expiration_date}
							onChange={(e) =>
								setPayment({ ...payment, expiration_date: e.target.value })
							}
						/>
					</Grid>
					<Grid item sm={0.5}></Grid>
					<Grid item sm={3}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="cvc"
							label="CVC"
							name="cvc"
							// autoComplete="cc-csc"
							autoFocus
							value={payment.CCV}
							onChange={(e) =>
								setPayment({ ...payment, CCV: parseInt(e.target.value, 10) })
							}
						/>
					</Grid>
				</Grid>
				<Button
					variant="contained"
					sx={{ fontWeight: 600, mt: 3 }}
					onClick={() => handlePaymentSettings()}
				>
					Save Changes
				</Button>
			</Box>
			{isSuccess && <Alert severity="success">Dane zostały zapisane</Alert>}
		</AppContainer>
	);
};

export default PaymentSettings;
