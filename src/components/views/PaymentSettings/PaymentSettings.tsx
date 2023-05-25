import { useState } from 'react';
import { Button, Grid, TextField, Box } from '@mui/material';

import AppContainer from '../../common/AppContainer';
import { IPayment } from '../../../shared/interfaces/payment.interface';

const PaymentSettings = () => {
  const [payment, setPayment] = useState<IPayment>({
    fullName: 'Bartłomiej Gruszka',
    creditCard: '34544352345234532462635',
    expires: '23/2025',
    cvc: 734,
  });

  return (
    <AppContainer back="/app/dashboard" label="Payment Settings" navbar>
      <Box component="form">
        <Grid container>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="name"
              autoFocus
              value={payment.fullName}
              // helperText="Please enter your name"
              // onChange={() => {}}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="creditCardNumber"
              label="Credit Card Number"
              name="creditCardNumber"
              // autoComplete="cc-number"
              autoFocus
              value={payment.creditCard}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="expires"
              label="Expires"
              name="expires"
              // autoComplete="cc-exp"
              autoFocus
              value={payment.expires}
            />
          </Grid>
          <Grid item sm={0.5}></Grid>
          <Grid item sm={3}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="cvc"
              label="CVC"
              name="cvc"
              // autoComplete="cc-csc"
              autoFocus
              value={payment.cvc}
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ fontWeight: 600, mt: 3 }}>
          Save Changes
        </Button>
      </Box>
    </AppContainer>
  );
};

export default PaymentSettings;
