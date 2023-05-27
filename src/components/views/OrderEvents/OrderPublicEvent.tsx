import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../common/AppContainer';
import {
  IOrder,
  IOrderDatesProps,
} from '../../../shared/interfaces/order.interface';

const OrderPublicEvent = (props: IOrderDatesProps) => {
  const [data, setData] = useState<IOrder>({
    name: '',
    startDate: props.startDate,
    finishDate: props.finishDate,
    type: '',
    status: '',
    additionalInfo: '',
    securityOption: true,
    barOption: false,
    artist: '',
    maxPeople: '',
    minAge: '',
    numberOfSeats: '',
    companyName: '',
    cateringOption: false,
    cateringName: '',
    types: '',
  });

  const navigate = useNavigate();
  const handleOrderEvent = async () => {
    // add order
    navigate('/app/dashboard');
  };

  return (
    <AppContainer
      back="/app/dashboard"
      label="Order Public Event"
      additionalLabel="Dance parties, Concerts, Club events"
      navbar
    >
      <Typography
        component="h2"
        variant="h5"
        sx={{
          fontWeight: 400,
          mb: 1,
          fontSize: 15,
          color: 'grey',
        }}
      >
        {`Selected dates: ${props.startDate} - ${props.finishDate}`}
      </Typography>

      <Box component="form">
        <Grid container>
          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="name"
              label="Event Name"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
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
              value={data.artist}
              onChange={(e) => setData({ ...data, artist: e.target.value })}
            />
          </Grid>

          <Grid item sm={5.5}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="maxPeople"
              label="Maximum number of people"
              name="maxPeople"
              value={data.maxPeople}
              onChange={(e) => setData({ ...data, maxPeople: e.target.value })}
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
              value={data.minAge}
              onChange={(e) => setData({ ...data, minAge: e.target.value })}
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
              value={data.additionalInfo}
              onChange={(e) =>
                setData({ ...data, additionalInfo: e.target.value })
              }
            />
          </Grid>
          <Grid item sm={12}>
            <FormGroup className="noSelect">
              <FormControlLabel
                sx={{ mt: 5 }}
                control={
                  <Checkbox
                    value={data.barOption}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setData({
                        ...data,
                        barOption: event.target.checked,
                      })
                    }
                    color="success"
                  />
                }
                label="Bar option with bartending service"
              />

              <FormControlLabel
                control={<Checkbox color="success" disabled checked />}
                label="* Security and bodyguards"
                value={data.securityOption}
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
          onClick={handleOrderEvent}
        >
          Order public event
        </Button>
      </Box>
    </AppContainer>
  );
};

export default OrderPublicEvent;
