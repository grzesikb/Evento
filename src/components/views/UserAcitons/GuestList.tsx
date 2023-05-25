import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import AppContainer from '../../common/AppContainer';
import AppDataGrid from '../../common/AppDataGrid';

const celebration = true;

const GuestList = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const typeParam = urlParams.get('id');

  const columns: GridColDef[] = [
    { field: 'id', headerName: '#', width: 60 },
    { field: 'fisrtName', headerName: 'First Name', width: 230 },
    { field: 'lastName', headerName: 'Last Name', width: 230 },
    {
      field: 'table',
      headerName: 'Table',
      width: 220,
      sortable: false,
    },
  ];

  const columnsCelebration: GridColDef[] = [
    { field: 'id', headerName: '#', width: 60 },
    { field: 'fisrtName', headerName: 'First Name', width: 230 },
    { field: 'lastName', headerName: 'Last Name', width: 230 },
    {
      field: 'table',
      headerName: 'Table',
      width: 100,
      sortable: false,
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

  return (
    <AppContainer
      back="/app/dashboard"
      label={`Guest list for order: ${typeParam}`}
      navbar
    >
      <Box component="form">
        <Grid container>
          <Grid item sm={5.75}>
            <TextField
              margin="dense"
              fullWidth
              id="fistName"
              label="Fist name"
              name="fistName"
              required
            />
          </Grid>
          <Grid item sm={0.5}></Grid>
          <Grid item sm={5.75}>
            <TextField
              margin="dense"
              fullWidth
              id="lastName"
              label="Last name"
              name="lastName"
              required
            />
          </Grid>
          {celebration && (
            <Grid item sm={12}>
              <TextField
                margin="dense"
                fullWidth
                id="tableId"
                label="Table ID"
                name="tableId"
              />
            </Grid>
          )}
        </Grid>
        <Button
          variant="contained"
          sx={{ fontWeight: 600, width: '100%', marginTop: 5 }}
        >
          Add Guest
        </Button>
      </Box>
      <AppDataGrid
        rows={rows}
        columns={celebration ? columnsCelebration : columns}
        exportOption
      />
    </AppContainer>
  );
};

export default GuestList;
