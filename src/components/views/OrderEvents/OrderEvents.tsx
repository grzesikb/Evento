/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Collapse,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
/* ATTENTION. Older version of @mui/x-date-pickers-pro used because 
it has a better time picker and the new one doesn't have. Don't upgrade */

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import OrderPublicEvent from './OrderPublicEvent';
import OrderPrivateEvent from './OrderPrivateEvent';
import OrderCelebrationEvent from './OrderCelebrationEvent';
import AppContainer from '../../common/AppContainer';
import { IOrderDatesProps } from '../../../shared/interfaces/order.interface';

interface IProps {
  type: string;
  isReady: boolean;
}

const OrderEvent = () => {
  const [propsEvent, setPropsEvent] = useState<IProps>({
    type: '',
    isReady: false,
  });

  const [eventDates, setEventDates] = useState<IOrderDatesProps>({
    startDate: null,
    finishDate: null,
  });

  const [openAlert, setOpenAlert] = useState<{
    success: boolean;
    error: boolean;
  }>({
    success: false,
    error: false,
  });

  const checkDateAvailability = async () => {
    try {
      //
      // tu sprawdzanie czy data jest dostępna
      //
      // rand tylko do testów ale ma zwracać true lub false
      const randomBoolean: boolean = Math.random() < 0.5;
      return randomBoolean;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const checkAvailability = async () => {
    let availability;
    if (eventDates.startDate && eventDates.finishDate) {
      availability = checkDateAvailability();
      if (await availability) {
        setOpenAlert({ success: true, error: false });
      } else {
        setOpenAlert({ success: false, error: true });
      }
    } else {
      setOpenAlert({ success: false, error: false });
    }
  };

  const handleSelectDate = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const typeParam = urlParams.get('type');
    if (
      typeParam === 'public' ||
      typeParam === 'private' ||
      typeParam === 'celebration'
    ) {
      setPropsEvent({ type: typeParam, isReady: true });
    }
  };
  useEffect(() => {
    checkAvailability();
  }, [eventDates]);

  return (
    <Box>
      {propsEvent.isReady ? (
        (propsEvent.type === 'public' && (
          <OrderPublicEvent
            startDate={eventDates.startDate}
            finishDate={eventDates.finishDate}
          />
        )) ||
        (propsEvent.type === 'private' && (
          <OrderPrivateEvent
            startDate={eventDates.startDate}
            finishDate={eventDates.finishDate}
          />
        )) ||
        (propsEvent.type === 'celebration' && (
          <OrderCelebrationEvent
            startDate={eventDates.startDate}
            finishDate={eventDates.finishDate}
          />
        ))
      ) : (
        <AppContainer
          back="/app/dashboard"
          label="Choose the date of the event"
          additionalLabel="The data you choose may already be taken"
          navbar
        >
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
                    value={eventDates.startDate}
                    onChange={(value) =>
                      setEventDates({
                        ...eventDates,
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
                    value={eventDates.finishDate}
                    onChange={(value) =>
                      setEventDates({
                        ...eventDates,
                        finishDate: value,
                      })
                    }
                    ampm={false}
                    disablePast
                  />
                </LocalizationProvider>
              </Grid>

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
            <Collapse in={openAlert.success}>
              <Alert severity="success" sx={{ m: 2 }}>
                Selected dates are free
              </Alert>
            </Collapse>
            <Collapse in={openAlert.error}>
              <Alert severity="info" color="error" sx={{ m: 2 }}>
                The selected date is already taken. Please select a different
                date
              </Alert>
            </Collapse>

            {openAlert.success && (
              <Button
                variant="contained"
                endIcon={<CalendarTodayIcon />}
                sx={{ fontWeight: 600 }}
                fullWidth
                onClick={handleSelectDate}
              >
                Select Dates
              </Button>
            )}
          </Box>
        </AppContainer>
      )}
    </Box>
  );
};

export default OrderEvent;
