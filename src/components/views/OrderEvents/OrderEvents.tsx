/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
/* ATTENTION. Older version of @mui/x-date-pickers-pro used because 
it has a better time picker and the new one doesn't have. Don't upgrade */

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import Navbar from '../../common/Navbar/Navbar';
import Back from '../../common/Back';
import Alert from '../../common/Alert';
import OrderPublicEvent from './OrderPublicEvent';

interface IOrderEvent {
  startDate: string | null | undefined;
  finishDate: string | null | undefined;
}
interface IPropsEvent {
  type: string;
  isReady: boolean;
}

const OrderEvent = () => {
  const navigate = useNavigate();

  const today = new Date();
  const todayString = today.toDateString();

  const [propsEvent, setPropsEvent] = useState<IPropsEvent>({
    type: '',
    isReady: false,
  });

  const [eventData, setEventData] = useState<IOrderEvent>({
    startDate: todayString,
    finishDate: todayString,
  });

  const checkAvailability = () => {
    // tu sprawdzanie czy data jest dostępna
    // dodanie danych do state eventData
    if (true) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const typeParam = urlParams.get('type');
      if (
        typeParam === 'public' ||
        typeParam === 'private' ||
        typeParam === 'celebration'
      )
        setPropsEvent({ type: typeParam, isReady: true });
      else toast.error('Wrong data type ');
      //
      //  POST /order/  (typ wyciągnięty i w state type)
      //
    } else
      toast.error(
        'The selected date is already taken. Please try another date ',
      );
  };
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 12,
        }}
      >
        {propsEvent.isReady ? (
          propsEvent.type === 'public' && <OrderPublicEvent />
        ) : (
          <Paper variant="outlined" sx={{ padding: 6, borderRadius: 4 }}>
            <Back onClick={() => navigate('/app/dashboard')} />
            <Box style={{ display: 'flex' }}>
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2, mr: 2 }}
              >
                Choose the date of the event
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  fontWeight: 400,
                  mb: 2,
                  fontSize: 15,
                  lineHeight: 2.5,
                  color: 'grey',
                }}
              >
                The data you choose may already be taken
              </Typography>
            </Box>
            <Box component="form">
              <Grid container>
                <Grid item sm={5}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      inputFormat="DD-MM-YYYY HH:mm"
                      renderInput={(propsTextField) => (
                        <TextField {...propsTextField} />
                      )}
                      label="Start date and time*"
                      value={eventData.startDate}
                      onChange={(value) =>
                        setEventData({
                          ...eventData,
                          startDate: value,
                        })
                      }
                      ampm={false}
                      disablePast
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item sm={2}>
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 0.5,
                      fontWeight: 500,
                      textAlign: 'center',
                      color: 'grey',
                    }}
                  >
                    -
                  </Typography>
                </Grid>
                <Grid item sm={5}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      inputFormat="DD-MM-YYYY HH:mm"
                      renderInput={(propsTextField) => (
                        <TextField {...propsTextField} />
                      )}
                      label="Finish date and time*"
                      value={eventData.finishDate}
                      onChange={(value) =>
                        setEventData({
                          ...eventData,
                          finishDate: value,
                        })
                      }
                      ampm={false}
                      disablePast
                    />
                  </LocalizationProvider>
                </Grid>
                {/* <Grid item sm={12}></Grid>
                <Grid item sm={12}>
                  <TextField
                    margin="dense"
                    fullWidth
                    id="additionalInfo"
                    label="Aditional info"
                    name="additionalInfo"
                    autoFocus
                    multiline
                  />
                </Grid> */}
                <Grid item sm={6.5}>
                  <Typography
                    component="h5"
                    variant="body2"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    * require
                  </Typography>
                </Grid>
                <Grid item sm={5.5}></Grid>
              </Grid>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ fontWeight: 600 }}
                onClick={checkAvailability}
              >
                Check the availability of dates
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
      <Alert />
    </Box>
  );
};

export default OrderEvent;
