import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SendIcon from '@mui/icons-material/Send';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import Back from '../../common/Back';
import Navbar from '../../common/Navbar/Navbar';

interface IProps {
  data: IPersonalData;
  onBack: () => any;
}
export interface IPersonalData {
  firstName: string;
  lastName: string;
  dateOfBirth: dayjs.Dayjs;
  phoneNumber: number;
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
  voivodeship: string;
  country: string;
}

const EditPersonalData = ({ data }: IProps, props: IProps) => {
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
            Edit your personal details
          </Typography>
          <Box component="form">
            <Grid container>
              <Grid item sm={5.5}>
                <TextField
                  defaultValue={data.firstName}
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
                  defaultValue={data.street}
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
                  defaultValue={data.lastName}
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
                  defaultValue={data.houseNumber}
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
                      defaultValue={data.dateOfBirth}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item sm={5.5}>
                <TextField
                  defaultValue={data.city}
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
                  defaultValue={data.phoneNumber}
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
                  defaultValue={data.postalCode}
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
                  defaultValue={data.voivodeship}
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
                  defaultValue={data.country}
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
        </Paper>
      </Box>
    </Box>
  );
};
export default EditPersonalData;
