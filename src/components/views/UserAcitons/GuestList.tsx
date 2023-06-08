import React, { useEffect, useState } from 'react';
import {
	Alert,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	useTheme,
} from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import AppContainer from '../../common/AppContainer';
import AppDataGrid from '../../common/AppDataGrid';
import { IGuestList } from '../../../shared/interfaces/guest-list.interface';
import { useMutation } from 'react-query';
import {
	addGuestService,
	getGuestsService,
} from '../../../services/guestListService';
import { deleteGuestService } from '../../../services/guestService';

// sprawdzanie czy celebration bo tam są jeszcze stoliki na backendzie jezeli jest private to table = null
const celebration = true;

const GuestList = () => {
	const [guests, setGuests] = useState<any[]>([]);
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const typeParam = urlParams.get('id');

	const {
		mutate: getGuestMutate,
		data: getGuestData,
		isSuccess: getGuestSuccess,
	} = useMutation(getGuestsService);

	const {
		mutate: addGuestMutate,
		data: addGuestData,
		isSuccess: addGuestSuccess,
	} = useMutation(addGuestService);

	const {
		mutate: deleteGuestMutate,
		data: deleteGuestData,
		isSuccess: deleteGuestSuccess,
	} = useMutation(deleteGuestService);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: '#', width: 60 },
		{
			field: 'fisrtName',
			headerName: 'First Name',
			width: 230,
			editable: true,
		},
		{ field: 'lastName', headerName: 'Last Name', width: 230, editable: true },
		{
			field: 'actions',
			headerName: 'Actions',
			width: 100,
			sortable: false,
			renderCell: (params: GridRenderCellParams<any>) => (
				<IconButton
					onClick={() => deleteGuestHandler(params.id as string)}
					title="Delete Guest"
				>
					<DeleteIcon color="error" />
				</IconButton>
			),
		},
	];

	const deleteGuestHandler = (id: string) => {
		setGuests(guests.filter((guest) => guest.id !== id));
		deleteGuestMutate({
			access_token: localStorage.getItem('accessToken') as string,
			id,
		});
	};

	useEffect(() => {
		getGuestMutate({
			access_token: localStorage.getItem('accessToken') as string,
			id: typeParam as string,
		});
	}, []);

	useEffect(() => {
		let isMounted = true;
		if (getGuestSuccess) {
			const formattedGuests: any[] = [];

			getGuestData.data.payload.map((item: any) => {
				formattedGuests.push({
					id: item?.id,
					fisrtName: item?.name,
					lastName: item?.surname,
					table: item.table_number,
				});
			});
			isMounted && setGuests(formattedGuests);
		}

		return () => {
			isMounted = false;
		};
	}, [getGuestSuccess]);

	const columnsCelebration: GridColDef[] = [
		{ field: 'id', headerName: '#', width: 60 },
		{
			field: 'fisrtName',
			headerName: 'First Name',
			width: 230,
			editable: true,
		},
		{ field: 'lastName', headerName: 'Last Name', width: 230, editable: true },
		{
			field: 'table',
			headerName: 'Table',
			width: 100,
			sortable: false,
			editable: true,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 100,
			sortable: false,
			renderCell: (params: GridRenderCellParams<any>) => (
				<IconButton
					onClick={() => deleteGuestHandler(params.id as string)}
					title="Delete Guest"
				>
					<DeleteIcon color="error" />
				</IconButton>
			),
		},
	];
	const rows = [
		{
			id: 1,
			fisrtName: 'Bartek',
			lastName: 'Grzesik',
			table: '1',
		},
		{
			id: 2,
			fisrtName: 'Jakub',
			lastName: 'Wrona',
			table: '1',
		},
	];

	const theme = useTheme();
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const [guest, setGuest] = useState<IGuestList>({
		id: '',
		firstName: '',
		lastName: '',
		table: undefined,
	});

	const handleCloseDialog = async () => {
		setOpenDialog(false);
	};

	const handleAddGuest = async () => {
		const guestEnitity = {
			name: guest.firstName,
			surname: guest.lastName,
			table_number: +guest.table!,
			list_id: localStorage.getItem(typeParam!),
		};

		addGuestMutate({
			access_token: localStorage.getItem('accessToken') as string,
			guestData: guestEnitity,
		});
	};

	useEffect(() => {
		if (addGuestSuccess) {
			getGuestMutate({
				access_token: localStorage.getItem('accessToken') as string,
				id: typeParam as string,
			});
			setOpenDialog(false);
		}
	}, [addGuestSuccess]);

	return (
		<AppContainer
			back="/app/dashboard"
			label={`Guest list for order: ${typeParam}`}
			navbar
		>
			<Button
				variant="contained"
				sx={{ fontWeight: 600, width: '100%', mt: 1, mb: 1 }}
				onClick={() => setOpenDialog(true)}
			>
				Add Guest
			</Button>
			<Dialog open={openDialog} onClose={handleCloseDialog}>
				<DialogTitle>Add guest</DialogTitle>
				<DialogContent>
					<TextField
						margin="dense"
						id="firstName"
						label="First Name"
						type="firstName"
						fullWidth
						required
						value={guest.firstName}
						onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
					/>
					<TextField
						margin="dense"
						id="lastName"
						label="Last Name"
						type="lastName"
						fullWidth
						required
						value={guest.lastName}
						onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
					/>
					{celebration && (
						<TextField
							margin="dense"
							id="table"
							label="Table"
							type="table"
							fullWidth
							required
							value={guest.table}
							onChange={(e) => setGuest({ ...guest, table: e.target.value })}
						/>
					)}
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleCloseDialog}
						sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
					>
						Cancel
					</Button>
					<Button
						onClick={handleAddGuest}
						sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
					>
						Add
					</Button>
					{addGuestSuccess && (
						<Alert severity="success">Gość został dodany!</Alert>
					)}
				</DialogActions>
			</Dialog>
			<AppDataGrid
				rows={guests}
				columns={celebration ? columnsCelebration : columns}
				exportOption
			/>
			{deleteGuestSuccess && (
				<Alert severity="success">Gość został usuniety</Alert>
			)}
		</AppContainer>
	);
};

export default GuestList;
