import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';

import AppContainer from '../../common/AppContainer';
import StatusChip from '../../common/StatusChip';
import { IOrder } from '../../../shared/interfaces/order.interface';
import { useMutation } from 'react-query';
import { eventDetailService } from '../../../services/eventService';
import { convertType } from '../../../tools/TypeConverter';
import { statusFormatter } from '../../../tools/StatusFormatter';

const OrderDetails = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const typeParam = urlParams.get('id');

	console.log(typeParam);

	const {
		mutate,
		data: responseData,
		isSuccess,
		isLoading,
	} = useMutation(eventDetailService);

	const [data, setData] = useState<IOrder>({
		name: '',
		startDate: null,
		finishDate: null,
		type: '',
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

	useEffect(() => {
		mutate({
			access_token: localStorage.getItem('accessToken') as string,
			id: typeParam as string,
		});
	}, []);

	useEffect(() => {
		if (isSuccess) {
			console.log(responseData);
			if (responseData.data.payload.length > 0) {
				const orderDetails = responseData.data.payload[0];
				console.log(orderDetails);
				setData({
					name: orderDetails.name,
					startDate: orderDetails.start_date,
					finishDate: orderDetails.end_date,
					type: convertType(orderDetails.type) as string,
					status: statusFormatter(orderDetails.status) as string,
					additionalInfo: orderDetails.additional_info,
					securityOption: orderDetails.security,
					barOption: orderDetails.bar_option,
					artist: orderDetails.artist_name,
					maxPeople: orderDetails.max_nr_of_people,
					minAge: orderDetails.minimal_age,
					numberOfSeats: orderDetails.number_of_seats,
					companyName: orderDetails.company_name,
					cateringOption: orderDetails.catering,
					cateringName: orderDetails.company_name,
					types: 'Birthdays',
				});
			}
		}
	}, [isSuccess]);

	return (
		<AppContainer
			back="/app/dashboard"
			label={`Order details: ${typeParam}`}
			navbar
		>
			<Grid container>
				{!isLoading ? (
					<>
						<Grid item xs={5.5}>
							<Typography
								variant="h6"
								sx={{ fontSize: 16, color: 'grey', minWidth: 300 }}
							>
								Name:
							</Typography>
							<Typography variant="h6" sx={{ fontSize: 16 }}>
								{data.name}
							</Typography>
						</Grid>
						<Grid item xs={1}></Grid>
						<Grid item xs={5.5}>
							<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
								Type:
							</Typography>
							<Typography variant="h6" sx={{ fontSize: 16 }}>
								{data.type}
							</Typography>
						</Grid>

						<Grid item xs={5.5} sx={{ mt: 2 }}>
							<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
								Start date:
							</Typography>
							<Typography variant="h6" sx={{ fontSize: 16 }}>
								{data.startDate}
							</Typography>
						</Grid>
						<Grid item xs={1}></Grid>
						<Grid item xs={5.5} sx={{ mt: 2 }}>
							<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
								Finish date:
							</Typography>
							<Typography variant="h6" sx={{ fontSize: 16 }}>
								{data.finishDate}
							</Typography>
						</Grid>

						<Grid item xs={5.5} sx={{ mt: 2 }}>
							<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
								Status:
							</Typography>
							<StatusChip type={data.status} />
						</Grid>
						<Grid item xs={1}></Grid>

						{/* ---------------- Detailed data ---------------- */}

						{data.type === 'Public' && (
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									mt: 7,
								}}
							>
								<Grid item>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Maximum number of people:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.numberOfSeats}
										{/* maxPeople */}
									</Typography>
								</Grid>
								<Grid item sx={{ ml: 5 }}>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Minimal age:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.types}
										{/* minAge */}
									</Typography>
								</Grid>
								<Grid item sx={{ ml: 10 }}>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Artist:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.cateringName}
										{/* artist */}
									</Typography>
								</Grid>
							</Box>
						)}
						{data.type === 'Private' && (
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									mt: 7,
								}}
							>
								<Grid item>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Number of seats:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.numberOfSeats}
										{/* numberOfSeats */}
									</Typography>
								</Grid>
								<Grid item sx={{ ml: 5 }}>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Company name:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.types}
										{/* companyName */}
									</Typography>
								</Grid>
							</Box>
						)}
						{data.type === 'Celebration' && (
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									mt: 7,
								}}
							>
								<Grid item>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Number of seats:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.numberOfSeats}
									</Typography>
								</Grid>
								<Grid item sx={{ ml: 5 }}>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Type:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.types}
									</Typography>
								</Grid>
								<Grid item sx={{ ml: 15 }}>
									<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
										Catering Name:
									</Typography>
									<Typography variant="h6" sx={{ fontSize: 16 }}>
										{data.cateringName}
									</Typography>
								</Grid>
							</Box>
						)}
						<Grid item xs={12} sx={{ mt: 5 }}>
							<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
								Additional Options:
							</Typography>
							<Typography variant="h6" sx={{ fontSize: 16 }}>
								{data.barOption && ' Bar service option, '}
								{data.securityOption && ' Security option, '}
								{/* detailedData.cateringOption && ' Catering option, ' */}
							</Typography>
						</Grid>
						<Grid item xs={12} sx={{ mt: 2 }}>
							<Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
								Additional info:
							</Typography>
							<Typography variant="h6" sx={{ fontSize: 16 }}>
								{data.additionalInfo}
							</Typography>
						</Grid>
					</>
				) : (
					<CircularProgress />
				)}
			</Grid>
		</AppContainer>
	);
};

export default OrderDetails;
