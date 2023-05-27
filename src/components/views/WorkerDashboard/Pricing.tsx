import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import AppContainer from '../../common/AppContainer';
import { IOrder } from '../../../shared/interfaces/order.interface';
import StatusChip from '../../common/StatusChip';
import { IPaymentDetails } from '../../../shared/interfaces/payment.interface';

// eslint-disable react/prop-types
const Pricing = () => {
  const theme = useTheme();

  const urlParams = new URLSearchParams(window.location.search);
  const typeParam = urlParams.get('id');

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
  const [paymentDetails, setPaymentDetails] = useState<IPaymentDetails>({
    id: null,
    name: '',
    startDate: '',
    finishDate: '',
    cost: '',
  });

  React.useEffect(() => {
    setData({
      name: 'Wesele Ani i Jakuba',
      startDate: '16:00 31.06.2023',
      finishDate: '17:00 31.06.2023',
      type: 'Celebration',
      status: 'inProgress',
      additionalInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id pharetra urna, in rhoncus lorem. Nunc bibendum orci at ex iaculis faucibus.',
      securityOption: true,
      barOption: true,
      artist: '',
      maxPeople: '',
      minAge: '',
      numberOfSeats: 32,
      companyName: '',
      cateringOption: false,
      cateringName: 'PawełCatering',
      types: 'Birthdays',
    });
    setPaymentDetails({
      id: null,
      name: data.name,
      startDate: data.startDate,
      finishDate: data.finishDate,
      cost: '',
    });
  }, []);

  // tylko do testów czy wszystko działa
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const navigate = useNavigate();

  const handleSendQuote = async () => {
    navigate('/app/dashboard');
  };

  const handleRejectOrder = async () => {
    navigate('/app/dashboard');
  };
  return (
    <AppContainer
      back="/app/dashboard"
      label={`Pricing order: ${typeParam}`}
      navbar
    >
      <Box component="form">
        <Grid container>
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
        </Grid>
        <TextField
          margin="dense"
          required
          fullWidth
          id="price"
          label="Price (zł)"
          name="price"
          value={paymentDetails.cost}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cost: e.target.value })
          }
          sx={{ mt: 3 }}
        />
        <Button
          variant="contained"
          sx={{ fontWeight: 600, mt: 3 }}
          onClick={handleSendQuote}
        >
          Send quote
        </Button>
        <Button
          variant="text"
          sx={{
            fontWeight: 600,
            mt: 3,
            ml: 2,
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
          onClick={handleRejectOrder}
        >
          Reject the order
        </Button>
      </Box>
    </AppContainer>
  );
};

export default Pricing;
