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
  const [eventData, setEventData] = useState<IPublicEvent>({
    name: '',
    startDate: '',
    finishDate: '',
  });

  return (
    <Paper variant="outlined" sx={{ padding: 6, borderRadius: 4 }}>
      <Back onClick={() => {}} />
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
          <Grid item sm={12}>
            <TextField
              margin="dense"
              fullWidth
              id="artist"
              label="Artist"
              name="artist"
              autoFocus
              helperText="Enter artists full names"
              multiline
              // value={}
              // onChange={() => {}}
            />
          </Grid>

          <Grid item sm={5.5}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="numberOfPeople"
              label="Maximum number of people"
              name="numberOfPeople"
              autoFocus
            />
          </Grid>
          <Grid item sm={1}></Grid>
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
          <Grid item sm={5.5}>
            <TextField
              margin="dense"
              fullWidth
              id="additionalInfo"
              label="Aditional info"
              name="additionalInfo"
              autoFocus
            />
          </Grid>
          <Grid item sm={1}></Grid>

          <Grid item sm={6.5}>
            <Typography component="h5" variant="body2" sx={{ mt: 2, mb: 2 }}>
              * require
            </Typography>
          </Grid>
          <Grid item sm={5.5}></Grid>
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
  );
};

export default OrderPublicEvent;
