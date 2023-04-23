import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Container, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import StatusChip from './StatusChip';

const columns: GridColDef[] = [
  { field: 'lp', headerName: '#', width: 60 },
  { field: 'id', headerName: 'ID', width: 70, sortable: false },
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'type', headerName: 'Type', width: 100, sortable: false },
  { field: 'date', headerName: 'Realization Date', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams<any>) => (
      <StatusChip type={params.value} />
    ),
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Actions',
    sortable: false,
    renderCell: (params: GridRenderCellParams<any>) => (
      <div>
        <IconButton onClick={() => console.log(params.id)} title="Details">
          <ArticleOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => console.log(params.id)} title="Edit">
          <EditIcon />
        </IconButton>
      </div>
    ),
  },
];
const rows = [
  {
    lp: 1,
    id: '43dsr6',
    name: 'Impreza studencka',
    type: 'Public',
    date: '21:00 08.08.2023',
    status: 'Finished',
  },
  {
    lp: 2,
    id: '24sd4s',
    name: 'Wesele Ani i Jakuba',
    type: 'Celebration',
    date: '16:00 31.06.2023',
    status: 'inProgress',
  },
  {
    lp: 3,
    id: '9bad2s',
    name: 'Konferencja ABW',
    type: 'Privte',
    date: '18:00 20.06.2023',
    status: 'Verification',
  },
];

const UserEvents = () => {
  return (
    <Container sx={{ height: 400, marginTop: 1, marginBottom: 5 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ marginTop: 3, marginBottom: 2 }}
        className="noSelect"
      >
        Your orders
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          borderRadius: 4,
        }}
      />
    </Container>
  );
};
export default UserEvents;
