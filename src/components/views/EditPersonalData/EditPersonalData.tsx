import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SendIcon from '@mui/icons-material/Send';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import AppContainer from '../../common/AppContainer';

import { IPersonalData } from '../../../shared/interfaces/person.interface';

const EditPersonalData = () => {
  const today = dayjs();
  const [personalData, setPersonalData] = useState<IPersonalData>({
    // example
    firstName: 'Bartek',
    lastName: 'Gruszka',
    dateOfBirth: today,
    phoneNumber: 999999999,
    street: 'Ala ma kota',
    houseNumber: '4A',
    city: 'Kielce',
    postalCode: '25-561',
    voivodeship: 'świętokrzyskie',
    country: 'Polska',
  });

  return (
    <AppContainer
      back="/app/dashboard"
      label="Edit your personal details"
      navbar
    >
      <Box component="form">
        <Grid container>
          <Grid item sm={5.5}>
            <TextField
              defaultValue={personalData.firstName}
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
              defaultValue={personalData.street}
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
              defaultValue={personalData.lastName}
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
              defaultValue={personalData.houseNumber}
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
                  defaultValue={personalData.dateOfBirth}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={5.5}>
            <TextField
              defaultValue={personalData.city}
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
              defaultValue={personalData.phoneNumber}
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
              defaultValue={personalData.postalCode}
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
              defaultValue={personalData.voivodeship}
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
              defaultValue={personalData.country}
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
        >
          Edit personal details
        </Button>
      </Box>
    </AppContainer>
  );
};
export default EditPersonalData;
