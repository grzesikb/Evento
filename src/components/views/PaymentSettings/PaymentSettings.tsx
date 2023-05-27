import React, { useState } from 'react';
import { Button, Grid, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import { IPayment } from '../../../shared/interfaces/payment.interface';

const PaymentSettings = () => {
  const [payment, setPayment] = useState<IPayment>({
    fullName: '',
    creditCard: '',
    expires: '',
    cvc: '',
  });

  const defaultPayment = {
    fullName: 'Bartłomiej Gruszka',
    creditCard: '34544352345234532462635',
    expires: '23/2025',
    cvc: 734,
  };

  React.useEffect(() => {
    setPayment(defaultPayment);
  }, []);

  const navigate = useNavigate();
  const handlePaymentSettings = async () => {
    navigate('/app/dashboard');
  };

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
              onChange={(e) =>
                setPayment({ ...payment, fullName: e.target.value })
              }
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
              onChange={(e) =>
                setPayment({ ...payment, creditCard: e.target.value })
              }
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
              onChange={(e) =>
                setPayment({ ...payment, expires: e.target.value })
              }
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
              onChange={(e) =>
                setPayment({ ...payment, cvc: parseInt(e.target.value, 10) })
              }
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ fontWeight: 600, mt: 3 }}
          onClick={() => handlePaymentSettings()}
        >
          Save Changes
        </Button>
      </Box>
    </AppContainer>
  );
};

export default PaymentSettings;
