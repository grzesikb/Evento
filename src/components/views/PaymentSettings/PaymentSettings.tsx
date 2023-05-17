import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import AppContainer from '../../common/AppContainer';

const PaymentSettings = () => {
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
              // helperText="Please enter your name"
              // value={}
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
