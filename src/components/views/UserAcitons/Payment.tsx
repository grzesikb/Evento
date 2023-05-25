import React, { useState } from 'react';
import { Button, Grid, Paper, useTheme } from '@mui/material';

import AppContainer from '../../common/AppContainer';
import {
  IPayment,
  IPaymentDetails,
} from '../../../shared/interfaces/payment.interface';

// eslint-disable react/prop-types
const Payment = () => {
  const theme = useTheme();

  const urlParams = new URLSearchParams(window.location.search);
  const typeParam = urlParams.get('id');

  // sprawdzanie czy jest metoda płatności podpięta
  const isPaymentMethod = true;

  const [paymentDetails, setPaymentDetails] = useState<IPaymentDetails>({
    id: typeParam,
    name: 'Wesele ani i Jakuba',
    startDate: '16:00 31.06.2023',
    finishDate: '17:00 31.06.2023',
    cost: 2500,
  });

  const [payment, setPayment] = useState<IPayment>({
    fullName: 'Bartłomiej Gruszka',
    creditCard: '34544352345234532462635',
    expires: '23/2025',
    cvc: 734,
  });

  return (
    <AppContainer
      back="/app/dashboard"
      label={`Payment order: ${typeParam}`}
      navbar
    >
      <Grid container>
        <Grid item xs={12}>
          {`Name:  ${paymentDetails.name}`}
        </Grid>
        <Grid item xs={12}>
          {`Start date:  ${paymentDetails.startDate}`}
        </Grid>
        <Grid item xs={12}>
          {`Finish date:  ${paymentDetails.finishDate}`}
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          Cost:
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ fontSize: 25, fontWeight: 700, color: 'green' }}
        >
          {`${paymentDetails.cost}zł`}
        </Grid>
        {isPaymentMethod ? (
          <>
            <Grid item xs={12} sx={{ mt: 3 }}>
              Pament Method:
              <Paper sx={{ padding: 4, mt: 1, borderRadius: 4 }}>
                <div>{payment.fullName}</div>
                <div>{payment.creditCard}</div>
                <div>{payment.expires}</div>
                <div>{payment.cvc}</div>
              </Paper>
            </Grid>
            <Button variant="contained" sx={{ fontWeight: 600, mt: 3 }}>
              Pay for the order
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: 600,
                mt: 3,
                ml: 2,
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
              }}
            >
              Reject the order
            </Button>
          </>
        ) : (
          <div style={{ color: 'red', marginTop: 10 }}>
            To pay for this order, please add a payment method
          </div>
        )}
      </Grid>
    </AppContainer>
  );
};

export default Payment;
