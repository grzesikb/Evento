/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GridColDef, GridRenderCellParams, GridRowId } from '@mui/x-data-grid';
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogTitle,
	IconButton,
	useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from 'react-router-dom';

import StatusChip from '../../common/StatusChip';
import AppDataGrid from '../../common/AppDataGrid';
import { useMutation } from 'react-query';
import {
	deleteEventService,
	userEventsService,
} from '../../../services/eventService';
import { statusFormatter } from '../../../tools/StatusFormatter';
import { createGuestListService } from '../../../services/guestListService';

const UserEvents = () => {
	const navigate = useNavigate();

	const { mutate, isSuccess, data, isLoading } = useMutation(userEventsService);
	const {
		mutate: guestListMutate,
		isSuccess: guestListSuccess,
		data: guestListData,
		isError: guestListError,
	} = useMutation(createGuestListService);
	const {
		mutate: deleteMutate,
		isSuccess: deleteSuccess,
		data: deleteData,
	} = useMutation(deleteEventService);
	const [orders, setOrders] = useState<any[]>([]);

	const columns: GridColDef[] = [
		{ field: 'lp', headerName: '#', width: 60 },
		{ field: 'id', headerName: 'ID', width: 70, sortable: false },
		{ field: 'name', headerName: 'Name', width: 230 },
		{ field: 'startDate', headerName: 'Start Date', width: 150 },
		{
			field: 'status',
			headerName: 'Status',
			sortable: false,
			width: 200,
			renderCell: (params: GridRenderCellParams<any>) => (
				<StatusChip type={params.value} />
			),
			// valueGetter: (params: GridValueGetterParams) =>
			//   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
		},
		{
			field: 'action',
			headerName: 'Actions',
			width: 220,
			sortable: false,
			renderCell: (params: GridRenderCellParams<any>) => (
				<div>
					<IconButton
						onClick={() => navigate(`/app/order-details?id=${params.id}`)}
						title="Details"
					>
						<ArticleOutlinedIcon />
					</IconButton>
					<IconButton
						onClick={() => navigate(`/app/edit-order?id=${params.id}`)}
						title="Edit"
					>
						<EditIcon />
					</IconButton>

					{/* tutaj musi być fetch danych bo status jest potrzebny (płatność dostępna po weryfikacji) */}
					{orders.find((item) => item.id === params.id).cost && (
						<IconButton
							onClick={() => navigate(`/app/payment?id=${params.id}`)}
							title="Payment"
						>
							<PaymentIcon />
						</IconButton>
					)}

					<IconButton
						onClick={() => handleCreateGuestList(params.id as string)}
						title="Create guest list"
					>
						<GroupAddIcon />
					</IconButton>
				</div>
			),
		},
	];

	const handleCreateGuestList = async (id: string) => {
		localStorage.setItem('order_id', id);

		await guestListMutate({
			access_token: localStorage.getItem('accessToken') as string,
			orderData: { order_id: id },
		});
	};

	useEffect(() => {
		const order_id = localStorage.getItem('order_id');
		if (guestListSuccess) {
			localStorage.setItem(order_id!, guestListData.data.payload.id);
		}
		if (guestListSuccess || guestListError)
			navigate(`/app/guest-list?id=${order_id}`);
	}, [guestListSuccess, guestListError]);

	useEffect(() => {
		mutate(localStorage.getItem('accessToken') as string);
	}, []);

	useEffect(() => {
		if (isSuccess) {
			console.log(data);
			const foremattedOrders: any[] = [];

			const events = data.data.payload;

			events.map((item: any, index: number) => {
				foremattedOrders.push({
					lp: index + 1,
					id: item.id,
					name: item.name,
					startDate: item.start_date,
					status: statusFormatter(+item.status),
					cost: item.cost,
				});
			});

			setOrders(foremattedOrders);
		}
	}, [isSuccess]);

	const handleDelete = (id: string) => {
		deleteMutate({
			access_token: localStorage.getItem('accessToken') as string,
			id,
		});
	};

	useEffect(() => {
		if (deleteSuccess) {
			handleClose();
		}
	}, [deleteSuccess]);

	const theme = useTheme();
	const [openDialog, setOpenDialog] = useState<{
		open: boolean;
		orderID: GridRowId;
	}>({
		open: false,
		orderID: '',
	});

	const handleClose = () => {
		setOpenDialog({
			open: false,
			orderID: '',
		});
	};

	return (
		<div>
			{isLoading ? (
				<CircularProgress />
			) : (
				<>
					<AppDataGrid
						rows={orders}
						columns={columns}
						label="Your orders"
						mb={6}
					/>
					<Dialog open={openDialog.open} onClose={handleClose}>
						<DialogTitle>
							Are you sure you want to cancel the order: {openDialog.orderID}
						</DialogTitle>

						<DialogActions>
							<Button
								onClick={handleClose}
								sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
							>
								No
							</Button>
							<Button
								onClick={() => handleDelete(openDialog.orderID as string)}
								variant="contained"
								color="error"
							>
								Yes
							</Button>
						</DialogActions>
					</Dialog>
				</>
			)}
		</div>
	);
};
export default UserEvents;
