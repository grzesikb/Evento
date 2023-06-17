import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AppDataGrid from '../../common/AppDataGrid';
import { useMutation } from 'react-query';
import {
	deleteWorkerService,
	getWorkersService,
} from '../../../services/workerService';

const WorkerList = () => {
	const [workers, setWorkers] = useState<any[]>([]);
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 475 },
		{
			field: 'email',
			headerName: 'Email',
			width: 475,
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
					onClick={() => handleDelete(params.id.toString())}
					title="Delete Guest"
				>
					<DeleteIcon color="error" />
				</IconButton>
			),
		},
	];

	const {
		mutate: getMutate,
		isSuccess: getSuccess,
		data: getData,
	} = useMutation(getWorkersService);

	const {
		mutate: deleteMutate,
		isSuccess: deleteSuccess,
		data: deleteData,
	} = useMutation(deleteWorkerService);

	useEffect(() => {
		getMutate(localStorage.getItem('accessToken') as string);
	}, []);

	useEffect(() => {
		if (deleteSuccess) {
			window.location.reload();
		}
	}, [deleteSuccess]);

	useEffect(() => {
		let isMounted = true;

		if (getSuccess && isMounted) {
			setWorkers(getData.data);
		}
		return () => {
			isMounted = false;
		};
	});

	const handleDelete = (id: string) => {
		deleteMutate({
			accessToken: localStorage.getItem('accessToken') as string,
			id,
		});
	};

	return (
		<AppDataGrid rows={workers} columns={columns} label="Workers" mb={10} />
	);
};

export default WorkerList;
