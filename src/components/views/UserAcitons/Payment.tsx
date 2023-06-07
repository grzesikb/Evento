import React, { useState } from 'react';
import { Button, Grid, Paper, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import {
	IPayment,
	IPaymentDetails,
	IPaymentInfo,
} from '../../../shared/interfaces/payment.interface';

// eslint-disable react/prop-types
const Payment = () => {
	const theme = useTheme();

	const urlParams = new URLSearchParams(window.location.search);
	const typeParam = urlParams.get('id');

	// sprawdzanie czy jest metoda płatności podpięta
	const isPaymentMethod = true;

	const [paymentDetails, setPaymentDetails] = useState<IPaymentDetails>({
		id: typeParam,
		name: '',
		startDate: '',
		finishDate: '',
		cost: '',
	});

	const [payment, setPayment] = useState<IPaymentInfo>({
		name: '',
		surname: '',
		number: '',
		expiration_date: '' as string,
		CCV: '',
		id: '',
	});

	React.useEffect(() => {
		setPaymentDetails({
			id: typeParam,
			name: 'Wesele ani i Jakuba',
			startDate: '16:00 31.06.2023',
			finishDate: '17:00 31.06.2023',
			cost: 2500,
		});
		setPayment({
			name: 'Bartłomiej Gruszka',
			surname: '',
			number: '',
			CCV: '',
			expiration_date: '' as string,
			id: '',
		});
	}, []);

	const navigate = useNavigate();

	const handlePayment = async () => {
		navigate('/app/dashboard');
	};

	const handleRejectPayment = async () => {
		navigate('/app/dashboard');
	};

	return (
		<AppContainer
			back="/app/dashboard"
			label={`Payment order: ${typeParam}`}
			navbar
		>
			<Grid container>
				<Grid item xs={12}>
					{`Name:  ${paymentDetails.name}`}
				</Grid>
				<Grid item xs={12}>
					{`Name:  ${paymentDetails.name}`}
				</Grid>
				<Grid item xs={12}>
					{`Start date:  ${paymentDetails.startDate}`}
				</Grid>
				<Grid item xs={12}>
					{`Finish date:  ${paymentDetails.finishDate}`}
				</Grid>
				<Grid item xs={12} sx={{ mt: 2 }}>
					Cost:
				</Grid>
				<Grid
					item
					xs={12}
					sx={{ fontSize: 25, fontWeight: 700, color: 'green' }}
				>
					{`${paymentDetails.cost}zł`}
				</Grid>
				{isPaymentMethod ? (
					<>
						<Grid item xs={12} sx={{ mt: 3 }}>
							Pament Method:
							<Paper sx={{ padding: 4, mt: 1, borderRadius: 4 }}>
								<div>{payment.name}</div>
								<div>{payment.surname}</div>
								<div>{payment.number}</div>
								<div>{payment.expiration_date as string}</div>
								<div>{payment.CCV}</div>
							</Paper>
						</Grid>
						<Button
							variant="contained"
							sx={{ fontWeight: 600, mt: 3 }}
							onClick={handlePayment}
						>
							Pay for the order
						</Button>
						<Button
							variant="text"
							sx={{
								fontWeight: 600,
								mt: 3,
								ml: 2,
								color: theme.palette.mode === 'dark' ? '#fff' : '#000',
							}}
							onClick={handleRejectPayment}
						>
							Reject the order
						</Button>
					</>
				) : (
					<div style={{ color: 'red', marginTop: 10 }}>
						To pay for this order, please add a payment method
					</div>
				)}
			</Grid>
		</AppContainer>
	);
};

export default Payment;
