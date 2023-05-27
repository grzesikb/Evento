import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import AppContainer from '../../common/AppContainer';

import { IAccountSettings } from '../../../shared/interfaces/auth.interface';

const AccountSettings = () => {
  const [accountSettings, setAccountSettings] = useState<IAccountSettings>({
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const navigate = useNavigate();
  const handleResetPassword = async () => {
    navigate('/app/dashboard');
  };
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
              value={accountSettings.oldPassword}
              onChange={(e) =>
                setAccountSettings({
                  ...accountSettings,
                  oldPassword: e.target.value,
                })
              }
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
              value={accountSettings.newPassword}
              onChange={(e) =>
                setAccountSettings({
                  ...accountSettings,
                  newPassword: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="repeatPassword"
              label="Repeat new password"
              name="repeatPassword"
              value={accountSettings.repeatPassword}
              onChange={(e) =>
                setAccountSettings({
                  ...accountSettings,
                  repeatPassword: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ fontWeight: 600, mt: 3 }}
          onClick={handleResetPassword}
        >
          Reset password
        </Button>
      </Box>
    </AppContainer>
  );
};

export default AccountSettings;
