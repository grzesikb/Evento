import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

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
              required
              fullWidth
              id="eventName"
              label="Event Name"
              name="eventName"
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="artist"
              label="Artist Names"
              name="artist"
              helperText="If you want to order artists, enter their names and artistic pseudonym"
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
            />
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={5.5}>
            <TextField
              margin="dense"
              fullWidth
              id="minAge"
              label="Minimal Age"
              name="minAge"
              helperText="Minimum age of a person to let him or her into the party"
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              fullWidth
              id="additionalInfo"
              label="Aditional info / Expectations"
              name="additionalInfo"
              multiline
            />
          </Grid>
          <Grid item sm={12}>
            <FormGroup className="noSelect">
              <FormControlLabel
                sx={{ mt: 5 }}
                control={<Checkbox color="success" />}
                label="Bar option with bartending service"
              />

              <FormControlLabel
                control={<Checkbox color="success" disabled checked />}
                label="* Security and bodyguards"
              />
            </FormGroup>
          </Grid>
          <Grid item sm={12}>
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
          Order public event
        </Button>
      </Box>
    </Paper>
  );
};

export default OrderPublicEvent;
