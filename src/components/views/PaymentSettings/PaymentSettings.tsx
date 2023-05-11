import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Back from '../../common/Back';
import Navbar from '../../common/Navbar/Navbar';

interface IProps {
  onBack: () => any;
}

const PaymentSettings = (props: IProps) => {
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
        <Paper variant="outlined" sx={{ padding: 6, borderRadius: 4 }}>
          <Back onClick={props.onBack} />
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Payment Settings
          </Typography>
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
        </Paper>
      </Box>
    </Box>
  );
};

export default PaymentSettings;
