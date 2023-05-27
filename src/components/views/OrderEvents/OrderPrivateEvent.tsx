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

const OrderPrivateEvent = (props: IOrderDatesProps) => {
  const [data, setData] = useState<IOrder>({
    name: '',
    startDate: props.startDate,
    finishDate: props.finishDate,
    type: '',
    status: '',
    additionalInfo: '',
    securityOption: false,
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
      label="Order Private Event"
      additionalLabel="Presentation, Conference for companies"
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
          <Grid item sm={7.5}>
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
          <Grid item sm={0.5}></Grid>
          <Grid item sm={4}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="numberOfSeats"
              label="Number of seats"
              name="numberOfSeats"
              value={data.numberOfSeats}
              onChange={(e) =>
                setData({ ...data, numberOfSeats: e.target.value })
              }
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="companyName"
              label="Company Name"
              name="companyName"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
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
                    color="success"
                    value={data.barOption}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setData({
                        ...data,
                        barOption: event.target.checked,
                      })
                    }
                  />
                }
                label="Bar option with bartending service"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value={data.cateringOption}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setData({
                        ...data,
                        cateringOption: event.target.checked,
                      })
                    }
                  />
                }
                label="Catering package"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value={data.securityOption}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setData({
                        ...data,
                        securityOption: event.target.checked,
                      })
                    }
                  />
                }
                label="Security and bodyguards"
              />
            </FormGroup>
          </Grid>
          <Grid item sm={12}>
            <Typography component="h5" variant="body2" sx={{ mt: 2, mb: 2 }}>
              * require
            </Typography>
            <Typography component="h5" variant="body2" sx={{ mt: 2, mb: 2 }}>
              Ability to create a guest list only after verification of the
              event
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
          Order private event
        </Button>
      </Box>
    </AppContainer>
  );
};

export default OrderPrivateEvent;
