import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import { IPaymentDetails } from '../../../shared/interfaces/payment.interface';
import { useMutation } from 'react-query';
import { eventDetailService } from '../../../services/eventService';

// eslint-disable react/prop-types
const Success = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const typeParam = urlParams.get('id');

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
				cost: 69000,
			});
		}
	}, [isSuccess]);

	const [paymentDetails, setPaymentDetails] = useState<IPaymentDetails>({
		id: null,
		name: '',
		startDate: '',
		cost: '',
	});

	const handleGetInvoice = async () => {
		// po kliknieciu ma dawac fakturke
	};

	return (
		<AppContainer
			back="/app/dashboard"
			label={`Transaction: ${paymentDetails.id}`}
			navbar
		>
			<Grid container>
				<Grid
					item
					xs={12}
					sx={{ fontSize: 25, fontWeight: 700, color: 'green' }}
				>
					Successfuly
				</Grid>
				<Grid item xs={12} sx={{ mt: 2 }}>
					Cost:
				</Grid>
				<Grid item xs={12} sx={{ fontSize: 25, fontWeight: 700 }}>
					{`${paymentDetails.cost}zł`}
				</Grid>
				<Grid item xs={12} sx={{ mt: 4 }}>
					Order:
				</Grid>
				<Grid item xs={5.5}>
					Name: {paymentDetails.name}
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={5.5}>
					Date: {paymentDetails.startDate}
				</Grid>
				<Button
					variant="contained"
					sx={{ fontWeight: 600, mt: 3 }}
					onClick={handleGetInvoice}
				>
					GET INVOICE
				</Button>
			</Grid>
		</AppContainer>
	);
};

export default Success;
