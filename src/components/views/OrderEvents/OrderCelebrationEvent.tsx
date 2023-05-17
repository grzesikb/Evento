import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import AppContainer from '../../common/AppContainer';

const OrderCelebrationEvent = () => {
  return (
    <AppContainer
      back="/app/dashboard"
      label="Order Celebration Event"
      additionalLabel="Birthdays, Name days, Bachelorette parties"
      navbar
    >
      <Box component="form">
        <Grid container>
          <Grid item sm={7.5}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="eventName"
              label="Event Name"
              name="eventName"
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
            />
          </Grid>
          <Grid item sm={12} sx={{ mt: 1, mb: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Type"
                // onChange={handleChange}
              >
                <MenuItem value={1}>Birthdays</MenuItem>
                <MenuItem value={2}>Name days</MenuItem>
                <MenuItem value={3}>Bachelorette parties</MenuItem>
              </Select>
            </FormControl>
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
                control={<Checkbox color="success" />}
                label="Security and bodyguards"
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
          Order celebration event
        </Button>
      </Box>
    </AppContainer>
  );
};

export default OrderCelebrationEvent;
