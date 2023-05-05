import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../common/Navbar/Navbar';
import Back from '../../common/Back';

interface IPublicEvent {
  name: string;
  startDate: string | null;
  finishDate: string;
}

const OrderPublicEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState<IPublicEvent>({
    name: '',
    startDate: '',
    finishDate: '',
  });

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
          <Back onClick={() => navigate('/app/dashboard')} />
          <Box style={{ display: 'flex' }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: 600, mb: 2, mr: 2 }}
            >
              Order Public Event
            </Typography>
            <Typography
              component="h2"
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 2,
                fontSize: 15,
                lineHeight: 2.5,
                color: 'grey',
              }}
            >
              Dance parties, Concerts, Club events
            </Typography>
          </Box>
          <Box component="form">
            <Grid container>
              <Grid item sm={5.5}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker
                      // value={eventData}
                      // onChange={(value) =>
                      //   setEventData({
                      //     ...eventData,
                      //     startDate: value ? value.startDate : null,
                      //   })
                      // }
                      ampm={false}
                      label="Start date"
                      format="DD/MM/YYYY HH:mm"
                      views={['year', 'month', 'day', 'hours', 'minutes']}
                    />
                  </DemoContainer>
                </LocalizationProvider>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker
                      label="Finish date"
                      format="DD/MM/YYYY HH:mm"
                      views={['year', 'month', 'day', 'hours', 'minutes']}
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
            >
              Add personal details
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderPublicEvent;
