import React, { useEffect, useState } from 'react';
import {
	Alert,
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import {
	IOrder,
	IOrderDatesProps,
} from '../../../shared/interfaces/order.interface';
import { useMutation } from 'react-query';
import { createEventService } from '../../../services/eventService';

const OrderCelebrationEvent = (props: IOrderDatesProps) => {
	const { mutate, isSuccess } = useMutation(createEventService);
	const [data, setData] = useState<IOrder>({
		name: '',
		startDate: props.startDate,
		finishDate: props.finishDate,
		type: '2',
		status: '',
		additionalInfo: '',
		securityOption: false,
		barOption: false,
		artist: '',
		maxPeople: '',
		minAge: '',
		numberOfSeats: '',
		companyName: '',
		cateringOption: false,
		cateringName: '',
		types: '',
	});

	const navigate = useNavigate();
	const handleOrderEvent = async () => {
		const orderEntity = {
			name: data.name,
			bar_option: data.barOption,
			security: data.securityOption,
			type: +data.type!,
			start_date: data.startDate,
			end_date: data.finishDate,
			additional_info: data.additionalInfo,
			status: 1,
			artist_name: data.artist,
			max_nr_of_people: +data.maxPeople!,
			minimal_age: +data.minAge!,
			company_name: data.companyName,
			catering: data.cateringOption,
			number_of_seats: +data.numberOfSeats!,
		};

		mutate({
			access_token: localStorage.getItem('accessToken') as string,
			orderData: orderEntity,
		});
	};

	useEffect(() => {
		let isMounted = true;

		isMounted &&
			isSuccess &&
			setTimeout(() => {
				navigate('/app/dashboard');
			}, 3000);
		return () => {
			isMounted = false;
		};
	}, [isSuccess]);

	return (
		<AppContainer
			back="/app/dashboard"
			label="Order Celebration Event"
			additionalLabel="Birthdays, Name days, Bachelorette parties"
			navbar
		>
			<Typography
				component="h2"
				variant="h5"
				sx={{
					fontWeight: 400,
					mb: 1,
					fontSize: 15,
					color: 'grey',
				}}
			>
				{`Selected dates: ${props.startDate} - ${props.finishDate}`}
			</Typography>
			<Box component="form">
				<Grid container>
					<Grid item sm={7.5}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="name"
							label="Event Name"
							name="name"
							value={data.name}
							onChange={(e) => setData({ ...data, name: e.target.value })}
						/>
					</Grid>
					<Grid item sm={0.5}></Grid>
					<Grid item sm={4}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="numberOfSeats"
							label="Number of seats"
							name="numberOfSeats"
							value={data.numberOfSeats}
							onChange={(e) =>
								setData({ ...data, numberOfSeats: e.target.value })
							}
						/>
					</Grid>

					<Grid item sm={12}>
						<TextField
							margin="dense"
							required
							fullWidth
							id="cateringName"
							label="Catering Name"
							name="cateringName"
							value={data.cateringName}
							onChange={(e) =>
								setData({ ...data, cateringName: e.target.value })
							}
						/>
					</Grid>
					<Grid item sm={12} sx={{ mt: 1, mb: 1 }}>
						<FormControl fullWidth>
							<InputLabel id="types-label">Type *</InputLabel>
							<Select
								labelId="types-label"
								id="types"
								label="Type"
								value={data.types}
								required
								onChange={(e) =>
									setData({
										...data,
										types: e.target.value as
											| ''
											| 'Birthdays'
											| 'Name days'
											| 'Bachelorette parties',
									})
								}
							>
								<MenuItem value={1}>Birthdays</MenuItem>
								<MenuItem value={2}>Name days</MenuItem>
								<MenuItem value={3}>Bachelorette parties</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item sm={12}>
						<TextField
							margin="dense"
							fullWidth
							id="additionalInfo"
							label="Aditional info / Expectations"
							name="additionalInfo"
							multiline
							value={data.additionalInfo}
							onChange={(e) =>
								setData({ ...data, additionalInfo: e.target.value })
							}
						/>
					</Grid>
					<Grid item sm={12}>
						<FormGroup className="noSelect">
							<FormControlLabel
								sx={{ mt: 5 }}
								control={
									<Checkbox
										color="success"
										value={data.barOption}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setData({
												...data,
												barOption: event.target.checked,
											})
										}
									/>
								}
								label="Bar option with bartending service"
							/>

							<FormControlLabel
								control={
									<Checkbox
										color="success"
										value={data.securityOption}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setData({
												...data,
												securityOption: event.target.checked,
											})
										}
									/>
								}
								label="Security and bodyguards"
							/>
						</FormGroup>
					</Grid>
					<Grid item sm={12}>
						<Typography component="h5" variant="body2" sx={{ mt: 2, mb: 2 }}>
							* require
						</Typography>
					</Grid>
					<Grid item sm={5.5}></Grid>
				</Grid>
				<Button
					variant="contained"
					endIcon={<SendIcon />}
					sx={{ fontWeight: 600 }}
					onClick={handleOrderEvent}
				>
					Order celebration event
				</Button>
			</Box>
			{isSuccess && (
				<Alert severity="success">
					Wydarzenie zostało utowrzone! Za chwile nastąpi przekierowanie...
				</Alert>
			)}
		</AppContainer>
	);
};

export default OrderCelebrationEvent;
