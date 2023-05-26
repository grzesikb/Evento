import React from 'react';
import { IconButton } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AppDataGrid from '../../common/AppDataGrid';

const WorkerList = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: '#', width: 60 },
    {
      field: 'email',
      headerName: 'Email',
      width: 230,
      sortable: false,
      editable: true,
    },
    {
      field: 'fisrtName',
      headerName: 'First Name',
      width: 230,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 230,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      sortable: false,
      renderCell: (params: GridRenderCellParams<any>) => (
        <IconButton
          onClick={() => console.log(`usuwanie guesta po ${params.id}`)}
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
      email: 'worker@gmail.com',
    },
    {
      id: 2,
      fisrtName: 'Jakub',
      lastName: 'Wrona',
      email: 'worker2@gmail.com',
    },
  ];
  return <AppDataGrid rows={rows} columns={columns} label="Workers" mb={10} />;
};

export default WorkerList;
