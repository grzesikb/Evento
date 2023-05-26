import React, { useState } from 'react';
import {
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

// sprawdzanie czy celebration bo tam są jeszcze stoliki na backendzie jezeli jest private to table = null
const celebration = true;

const GuestList = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const typeParam = urlParams.get('id');

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
          onClick={() => console.log(`usuwanie guesta po ${params.id}`)}
          title="Delete Guest"
        >
          <DeleteIcon color="error" />
        </IconButton>
      ),
    },
  ];

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

  const handleClose = () => {
    setOpenDialog(false);
  };

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
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add guest</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="firstName"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="lastName"
            fullWidth
            required
          />
          {celebration && (
            <TextField
              autoFocus
              margin="dense"
              id="table"
              label="Table"
              type="table"
              fullWidth
              required
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <AppDataGrid
        rows={rows}
        columns={celebration ? columnsCelebration : columns}
        exportOption
      />
    </AppContainer>
  );
};

export default GuestList;
