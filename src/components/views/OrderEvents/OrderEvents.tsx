/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, MouseEvent} from 'react';
import {
  Alert,
  Box,
  Button,
  Collapse,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
/* ATTENTION. Older version of @mui/x-date-pickers-pro used because 
it has a better time picker and the new one doesn't have. Don't upgrade */
import { useMutation } from 'react-query';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import OrderPublicEvent from './OrderPublicEvent';
import OrderPrivateEvent from './OrderPrivateEvent';
import OrderCelebrationEvent from './OrderCelebrationEvent';
import AppContainer from '../../common/AppContainer';
import { IOrderDatesProps } from '../../../shared/interfaces/order.interface';
import { checkDateService } from '../../../services/eventService';
import dayjs from 'dayjs';

interface IProps {
  type: string;
}

const OrderEvent = () => {
  const [propsEvent, setPropsEvent] = useState<IProps>({
    type: '',
  });

  const [data, setData] = useState<IOrderDatesProps>({
    startDate: ''
  });

  const [date, setDate] = useState<string>('')

  const {
		mutate,
		isSuccess,
		data: responseData,
		isError,
		error,
	} = useMutation(checkDateService);

  const checkType = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const typeParam = urlParams.get('type');
    if (
      typeParam === 'public' ||
      typeParam === 'private' ||
      typeParam === 'celebration'
    ) {
      await setPropsEvent({type: typeParam});
    }
  };

  const onSubmit = async (e: MouseEvent) => {
		e.preventDefault();
    
    if(date){
      mutate(date)
    }
	};

  useEffect(() => {
		if (isSuccess) {
			checkType()
		}
	}, [isSuccess]);

  useEffect(()=>{
    if(data.startDate){
      setDate(new Date(data.startDate).toLocaleDateString())
    }
  },[data.startDate])

  return (
    <Box>
      {isSuccess ? (
        (propsEvent.type === 'public' && (
          <OrderPublicEvent
            startDate={date}
          />
        )) ||
        (propsEvent.type === 'private' && (
          <OrderPrivateEvent
            startDate={date}
          />
        )) ||
        (propsEvent.type === 'celebration' && (
          <OrderCelebrationEvent
            startDate={date}
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
                  <DatePicker
                    inputFormat="DD.MM.YYYY"
                    renderInput={(propsTextField) => (
                      <TextField {...propsTextField} />
                    )}
                    label="Date of event*"
                    value={data.startDate}
                    onChange={(value) =>
                      setData({
                        ...data,
                        startDate: value,
                      })
                    }
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
                </Typography>
              </Grid>
              <Grid item sm={5}>
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
            {isError && (
              <Alert sx={{ minWidth: '350px', mt: 1 }} severity="error">{(error as any).response.data.detail}</Alert>
            )}

              <Button
                variant="contained"
                endIcon={<CalendarTodayIcon />}
                sx={{ fontWeight: 600 }}
                fullWidth
                onClick={(e)=> onSubmit(e)}
              >
                Select Date
              </Button>
          </Box>
        </AppContainer>
      )}
    </Box>
  );
};

export default OrderEvent;
