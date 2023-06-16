import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import {
	IPayment,
	IPaymentDetails,
	IPaymentInfo,
} from '../../../shared/interfaces/payment.interface';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from 'react-query';
import { eventDetailService } from '../../../services/eventService';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51NGhtFCx3j1gch1GW7UZ1fU5YAc9Cw1hvRPmehqnNmIeqlECsQxft8xdNnTRUzH5LjfdRqNVZLNptk23VCY8GgV200Ll4DxgVl'
);

// eslint-disable react/prop-types
const Payment = () => {
	const theme = useTheme();

	const urlParams = new URLSearchParams(window.location.search);
	const typeParam = urlParams.get('id');

	// sprawdzanie czy jest metoda płatności podpięta
	const isPaymentMethod = true;

	const { mutate, isSuccess, data } = useMutation(eventDetailService);

	useEffect(() => {
		mutate({
			access_token: localStorage.getItem('accessToken') as string,
			id: typeParam as string,
		});
	}, []);

	useEffect(() => {
		if (isSuccess) {
			setPaymentDetails({
				id: typeParam as string,
				name: data.data.payload[0].name,
				startDate: data.data.payload[0].start_date,
				cost: data.data.payload[0].cost,
			});
		}
	}, [isSuccess]);

	const [paymentDetails, setPaymentDetails] = useState<IPaymentDetails>({
		id: typeParam,
		name: '',
		startDate: '',
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

	console.log(paymentDetails);
	useEffect(() => {
		if (localStorage.getItem('paymentData')) {
			const paymentData = JSON.parse(
				localStorage.getItem('paymentData') as string
			);
			setPayment({
				name: paymentData.name,
				surname: paymentData.surname,
				number: paymentData.number,
				CCV: paymentData.CCV,
				expiration_date: paymentData.expiration_date,
				id: paymentData.id,
			});
		} else {
			setPayment({
				name: '',
				surname: '',
				number: '',
				CCV: '',
				expiration_date: '' as string,
				id: '' as string,
			});
		}
	}, []);

	const navigate = useNavigate();

	const handlePayment = async () => {
		const stripe = await stripePromise;
		await stripe?.redirectToCheckout({
			lineItems: [
				{
					price: 'price_1NJNYlCx3j1gch1Gs6lGhWny', // Replace with the ID of your price
					quantity: +paymentDetails.cost,
				},
			],
			mode: 'payment',
			successUrl: `http://127.0.0.1:3000/app/payment/success?id=${paymentDetails.id}&cost=${paymentDetails.cost}&name=${paymentDetails.name}&date=${paymentDetails.startDate}`,
			cancelUrl: 'https://127.0.0.1/cancel',
		});

		// If `redirectToCheckout` fails due to a browser or network
		// error, display the localized error message to your customer
		// using `error.message`.
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
					{`Start date:  ${paymentDetails.startDate}`}
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
								<div>
									<b>Name:</b> {payment.name}
								</div>
								<div>
									<b>Surname:</b> {payment.surname}
								</div>
								<div>
									<b>Number:</b> {payment.number}
								</div>
								<div>
									<b>Expiration time: </b>
									{payment.expiration_date as string}
								</div>
								<div>
									<b>CCV:</b> {payment.CCV}
								</div>
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
