import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import AppContainer from '../../common/AppContainer';

const AccountSettings = () => {
  return (
    <AppContainer back="/app/dashboard" label="Account Settings" navbar>
      <Box component="form">
        <Grid container sx={{ width: 400 }}>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="oldPassword"
              label="Old password"
              name="oldPassword"

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
              id="newPassword"
              label="New password"
              name="newPassword"
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="repeatNewPassword"
              label="Repeat new password"
              name="repeatNewPassword"
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ fontWeight: 600, mt: 3 }}>
          Reset password
        </Button>
      </Box>
    </AppContainer>
  );
};

export default AccountSettings;
