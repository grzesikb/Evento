import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Container, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import StatusChip from '../../common/StatusChip';
import AppDataGrid from '../../common/AppDataGrid';

const EventList = () => {
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

          <IconButton
            onClick={() => navigate(`/app/guest-list?id=${params.id}`)}
            title="Guest list"
          >
            <PeopleAltIcon />
          </IconButton>

          <IconButton
            onClick={() => navigate(`/app/pricing?id=${params.id}`)}
            title="Pricing"
          >
            <RequestQuoteIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              toast(
                // eslint-disable-next-line react/no-unstable-nested-components
                () => (
                  <div style={{ width: '90%' }}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>
                      Are you sure that you want to delete the order:
                      {` ${params.id}`}
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ fontWeight: 600 }}
                        onClick={() => toast.dismiss()} // add delete order
                      >
                        Delete Order
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => toast.dismiss()}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ),
                {
                  style: {
                    background: '#272727',
                    color: '#fff',
                  },
                  duration: 10000,
                },
              )
            }
            title="Delete"
          >
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

  return <AppDataGrid rows={rows} columns={columns} label="Orders" mb={10} />;
};

export default EventList;
