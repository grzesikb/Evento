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
import EditIcon from '@mui/icons-material/Edit';
import AppContainer from '../../common/AppContainer';
import {
  IOrderCelebrationEvent,
  IOrderEvent,
} from '../../../shared/interfaces/order.interface';

const EditOrder = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const typeParam = urlParams.get('id');

  const [data, setData] = useState<IOrderEvent>({
    name: '',
    startDate: '',
    finishDate: '',
    type: '',
    status: '',
    additionalInfo: '',
  });
  const [detailedData, setDetailedData] = useState<IOrderCelebrationEvent>({
    numberOfSeatsC: 15,
    cateringName: '',
    types: 'Birthdays',
  });

  React.useEffect(() => {
    setData({
      name: 'Wesele Ani i Jakuba',
      startDate: '16:00 31.06.2023',
      finishDate: '17:00 31.06.2023',
      type: 'Celebration',
      status: 'inProgress',
      additionalInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id pharetra urna, in rhoncus lorem. Nunc bibendum orci at ex iaculis faucibus.',
      securityOption: true,
      barOption: true,
    });
    setDetailedData({
      numberOfSeatsC: 32,
      cateringName: 'PawełCatering',
      types: 'Birthdays',
    });
  }, []);

  return (
    <AppContainer
      back="/app/dashboard"
      label={`Edit order: ${typeParam}`}
      additionalLabel={`Type: ${data.type} | Date: ${data.startDate} - ${data.finishDate}`}
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
              value={data.name}
            />
          </Grid>

          {/* ---------------- Detailed data ---------------- */}

          {data.type === 'Public' && (
            <>
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
                  // value={detailedData.artist}
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
                  // value={detailedData.maxPeople}
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
                  // value={detailedData.minAge}

                  helperText="Minimum age of a person to let him or her into the party"
                />
              </Grid>
            </>
          )}

          {data.type === 'Private' && (
            <>
              <Grid item sm={12}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="numberOfSeats"
                  label="Number of seats"
                  name="numberOfSeats"
                  // value={detailedData.numberOfSeats}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="company"
                  label="Company Name"
                  name="company"
                  // value={detailedData.companyName}
                />
              </Grid>
            </>
          )}

          {data.type === 'Celebration' && (
            <>
              <Grid item sm={12}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="numberOfSeats"
                  label="Number of seats"
                  name="numberOfSeats"
                  value={detailedData.numberOfSeatsC}
                />
              </Grid>

              <Grid item sm={12}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="catering"
                  label="Catering Name"
                  name="catering"
                  value={detailedData.cateringName}
                />
              </Grid>

              <Grid item sm={12} sx={{ mt: 1, mb: 1, ml: 0.5 }}>
                <Typography component="h5" variant="body2">
                  Type: {detailedData.types}
                </Typography>
              </Grid>
            </>
          )}

          <Grid item sm={12} sx={{ mt: 1 }}>
            <TextField
              margin="dense"
              fullWidth
              id="additionalInfo"
              label="Aditional info / Expectations"
              name="additionalInfo"
              multiline
              value={data.additionalInfo}
            />
          </Grid>
          <Grid item sm={12}>
            <FormGroup className="noSelect">
              {data.type === 'Public' && (
                <FormControlLabel
                  control={<Checkbox color="success" disabled checked />}
                  label="* Security and bodyguards"
                />
              )}
              {data.type === 'Private' && (
                <>
                  <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="Catering package"
                    // checked={detailedData.cateringOption}
                  />
                  <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="Security and bodyguards"
                    checked={data.securityOption}
                  />
                </>
              )}
              {data.type === 'Celebration' && (
                <FormControlLabel
                  control={<Checkbox color="success" />}
                  label="Security and bodyguards"
                  checked={data.securityOption}
                />
              )}
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Bar option with bartending service"
                checked={data.barOption}
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
          endIcon={<EditIcon />}
          sx={{ fontWeight: 600 }}
        >
          Edit Order
        </Button>
      </Box>
    </AppContainer>
  );
};

export default EditOrder;
