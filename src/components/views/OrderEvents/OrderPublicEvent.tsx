import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

import AppContainer from '../../common/AppContainer';

const OrderPublicEvent = () => {
  return (
    <AppContainer
      back="/app/dashboard"
      label="Order Public Event"
      additionalLabel="Dance parties, Concerts, Club events"
      navbar
    >
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
    </AppContainer>
  );
};

export default OrderPublicEvent;
