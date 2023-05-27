import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { IOrder } from '../../../shared/interfaces/order.interface';

const EditOrder = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const typeParam = urlParams.get('id');

  const [data, setData] = useState<IOrder>({
    name: '',
    startDate: null,
    finishDate: null,
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
      artist: '',
      maxPeople: '',
      minAge: '',
      numberOfSeats: 32,
      companyName: '',
      cateringOption: false,
      cateringName: 'PawełCatering',
      types: 'Birthdays',
    });
  }, []);

  // tylko do testów czy wszystko działa
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const navigate = useNavigate();
  const handleEditOrder = async () => {
    navigate('/app/dashboard');
  };
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
              id="name"
              label="Event Name"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
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
                  value={data.artist}
                  onChange={(e) => setData({ ...data, artist: e.target.value })}
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
                  value={data.maxPeople}
                  onChange={(e) =>
                    setData({ ...data, maxPeople: e.target.value })
                  }
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
                  value={data.minAge}
                  helperText="Minimum age of a person to let him or her into the party"
                  onChange={(e) => setData({ ...data, minAge: e.target.value })}
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
                  id="company"
                  label="Company Name"
                  name="company"
                  value={data.companyName}
                  onChange={(e) =>
                    setData({ ...data, companyName: e.target.value })
                  }
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
                  id="catering"
                  label="Catering Name"
                  name="catering"
                  value={data.cateringName}
                  onChange={(e) =>
                    setData({ ...data, cateringName: e.target.value })
                  }
                />
              </Grid>

              <Grid item sm={12} sx={{ mt: 1, mb: 1, ml: 0.5 }}>
                <Typography component="h5" variant="body2">
                  Type: {data.types}
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
              onChange={(e) =>
                setData({ ...data, additionalInfo: e.target.value })
              }
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
                    control={
                      <Checkbox
                        color="success"
                        value={data.cateringOption}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>,
                        ) =>
                          setData({
                            ...data,
                            cateringOption: event.target.checked,
                          })
                        }
                        checked={data.cateringOption}
                      />
                    }
                    label="Catering package"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="success"
                        value={data.securityOption}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>,
                        ) =>
                          setData({
                            ...data,
                            securityOption: event.target.checked,
                          })
                        }
                        checked={data.securityOption}
                      />
                    }
                    label="Security and bodyguards"
                  />
                </>
              )}
              {data.type === 'Celebration' && (
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
                      checked={data.securityOption}
                    />
                  }
                  label="Security and bodyguards"
                />
              )}
              <FormControlLabel
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
                    checked={data.barOption}
                  />
                }
                label="Bar option with bartending service"
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
          onClick={handleEditOrder}
        >
          Edit Order
        </Button>
      </Box>
    </AppContainer>
  );
};

export default EditOrder;
