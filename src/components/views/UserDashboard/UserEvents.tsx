import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Container, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import StatusChip from '../../common/StatusChip';

const UserEvents = () => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: 'lp', headerName: '#', width: 60 },
    { field: 'id', headerName: 'ID', width: 70, sortable: false },
    { field: 'name', headerName: 'Name', width: 230 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'finishDate', headerName: 'Finish Date', width: 150 },
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
      width: 200,
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
          <IconButton onClick={() => console.log(params.id)} title="Payment">
            <PaymentIcon />
          </IconButton>

          <IconButton onClick={() => console.log(params.id)} title="Delete">
            <DeleteIcon color="error" />
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
      startDate: '21:00 08.08.2023',
      finishDate: '22:00 08.08.2023',
      status: 'Finished',
    },
    {
      lp: 2,
      id: '24sd4s',
      name: 'Wesele Ani i Jakuba',
      startDate: '16:00 31.06.2023',
      finishDate: '17:00 31.06.2023',
      status: 'inProgress',
    },
    {
      lp: 3,
      id: '9bad2s',
      name: 'Konferencja ABW',
      startDate: '18:00 20.06.2023',
      finishDate: '19:00 20.06.2023',
      status: 'Verification',
    },
    {
      lp: 4,
      id: '1bsdfg',
      name: 'Zebranie Grzybiarzy',
      startDate: '20:00 19.06.2023',
      finishDate: '21:00 19.06.2023',
      status: 'Payments',
    },
    {
      lp: 5,
      id: '1bsdf5',
      name: 'Zebranie Pszczelarzy',
      startDate: '21:00 21.06.2023',
      finishDate: '23:00 21.06.2023',
      status: 'Offer',
    },
  ];

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
