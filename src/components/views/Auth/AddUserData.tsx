import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Navbar from '../../common/Navbar/Navbar';

const AddUserData = () => {
  const navigate = useNavigate();

  const handlleCreateAccount = () => {
    navigate('/app/dashboard');
  };

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
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Complete your personal details
          </Typography>
          <Box component="form">
            <Grid container>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  autoFocus
                  // helperText="Please enter your name"
                  // value={}
                  // onChange={() => {}}
                />
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  autoComplete="address-line1"
                  autoFocus
                />
              </Grid>

              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  autoFocus
                />
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  fullWidth
                  id="houseNumber"
                  label="House Number"
                  name="houseNumber"
                  autoComplete="address-line2"
                  autoFocus
                />
              </Grid>
              <Grid item sm={5.5}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  autoComplete="bday"
                >
                  <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker
                      label="Date of birth"
                      format="DD/MM/YYYY"
                      views={['year', 'month', 'day']}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="address-line3"
                  autoFocus
                />
              </Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  type="number"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  sx={{
                    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                      {
                        '-webkit-appearance': 'none',
                        margin: 0,
                      },
                  }}
                />
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  name="postalCode"
                  autoComplete="postal-code"
                  autoFocus
                />
                {/* <PostalCodeInput /> */}
              </Grid>
              <Grid item sm={6.5}></Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="voivodeship"
                  label="Voivodeship"
                  name="voivodeship"
                  autoComplete="address-line4"
                  autoFocus
                />
              </Grid>
              <Grid item sm={6.5}>
                <Typography component="h5" variant="body2" sx={{ mt: 2 }}>
                  * require
                </Typography>
              </Grid>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ fontWeight: 600 }}
              onClick={() => handlleCreateAccount()}
            >
              Add personal details
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default AddUserData;
