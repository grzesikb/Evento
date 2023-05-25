import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import AppContainer from '../../common/AppContainer';
import StatusChip from '../../common/StatusChip';
import {
  IOrderCelebrationEvent,
  IOrderEvent,
  IOrderPrivateEvent,
  IOrderPublicEvent,
} from '../../../shared/interfaces/order.interface';

const OrderDetails = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const typeParam = urlParams.get('id');

  // fetch data
  const [data, setData] = useState<IOrderEvent>({
    name: '',
    startDate: '',
    finishDate: '',
    type: '',
    status: '',
  });
  const [detailedData, setDetailedData] = useState<IOrderCelebrationEvent>({
    numberOfSeatsC: 15,
    cateringName: '',
    types: 'Birthdays',
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
    });
    setDetailedData({
      numberOfSeatsC: 32,
      cateringName: 'PawełCatering',
      types: 'Birthdays',
    });
  }, []);

  return (
    <AppContainer
      back="/app/dashboard"
      label={`Order details: ${typeParam}`}
      navbar
    >
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
                {detailedData.numberOfSeatsC}
                {/* maxPeople */}
              </Typography>
            </Grid>
            <Grid item sx={{ ml: 5 }}>
              <Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
                Minimal age:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {detailedData.types}
                {/* minAge */}
              </Typography>
            </Grid>
            <Grid item sx={{ ml: 10 }}>
              <Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
                Artist:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {detailedData.cateringName}
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
                {detailedData.numberOfSeatsC}
                {/* numberOfSeats */}
              </Typography>
            </Grid>
            <Grid item sx={{ ml: 5 }}>
              <Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
                Company name:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {detailedData.types}
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
                {detailedData.numberOfSeatsC}
              </Typography>
            </Grid>
            <Grid item sx={{ ml: 5 }}>
              <Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
                Type:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {detailedData.types}
              </Typography>
            </Grid>
            <Grid item sx={{ ml: 15 }}>
              <Typography variant="h6" sx={{ fontSize: 16, color: 'grey' }}>
                Catering Name:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {detailedData.cateringName}
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
    </AppContainer>
  );
};

export default OrderDetails;
