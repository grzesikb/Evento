/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SendIcon from '@mui/icons-material/Send';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import { IPersonalData } from '../../../shared/interfaces/person.interface';

const EditPersonalData = () => {
  const [personalData, setPersonalData] = useState<IPersonalData>({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    phoneNumber: '',
    street: '',
    houseNumber: '',
    city: '',
    postalCode: '',
    voivodeship: '',
    country: '',
  });

  // auto wypełnianie juz danych ale tu musi być fetch
  const defaultPersonalData = {
    firstName: 'Bartek',
    lastName: 'Gruszka',
    dateOfBirth: null,
    phoneNumber: 999999999,
    street: 'Ala ma kota',
    houseNumber: '4A',
    city: 'Kielce',
    postalCode: '25-561',
    voivodeship: 'świętokrzyskie',
    country: 'Polska',
  };

  React.useEffect(() => {
    setPersonalData(defaultPersonalData);
  }, []);

  const navigate = useNavigate();

  const handleEditPersonalData = async () => {
    navigate('/app/dashboard');
  };

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
              value={personalData.firstName}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  firstName: e.target.value,
                })
              }
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
              value={personalData.street}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  street: e.target.value,
                })
              }
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
              value={personalData.lastName}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  lastName: e.target.value,
                })
              }
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
              value={personalData.houseNumber}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  houseNumber: e.target.value,
                })
              }
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
                  value={personalData.dateOfBirth}
                  onChange={(newDate) =>
                    setPersonalData({
                      ...personalData,
                      dateOfBirth: newDate,
                    })
                  }
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
              value={personalData.city}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  city: e.target.value,
                })
              }
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
              value={personalData.phoneNumber}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  phoneNumber: parseInt(e.target.value, 10),
                })
              }
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
              value={personalData.postalCode}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  postalCode: e.target.value,
                })
              }
            />
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
              value={personalData.voivodeship}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  voivodeship: e.target.value,
                })
              }
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
              value={personalData.country}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  country: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ fontWeight: 600 }}
          onClick={() => handleEditPersonalData()}
        >
          Edit personal details
        </Button>
      </Box>
    </AppContainer>
  );
};
export default EditPersonalData;
