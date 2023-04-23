import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Back from '../../components/Back';

interface IProps {
  onBack: () => any;
}

const AccountSettings = (props: IProps) => {
  return (
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
        <Typography component="h1" variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Account Settings
        </Typography>
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
                id="newPassword"
                label="New password"
                name="newPassword"
                autoFocus
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
                autoFocus
              />
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ fontWeight: 600, mt: 3 }}>
            Reset password
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AccountSettings;
