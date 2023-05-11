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
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import Back from '../../common/Back';

const OrderCelebrationEvent = () => {
  return (
    <Paper variant="outlined" sx={{ padding: 6, borderRadius: 4 }}>
      <Back onClick={() => {}} />
      <Box style={{ display: 'flex' }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, mr: 2 }}
        >
          Order Celebration Event
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
          Birthdays, Name days, Bachelorette parties
        </Typography>
      </Box>
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
          Order private event
        </Button>
      </Box>
    </Paper>
  );
};

export default OrderCelebrationEvent;
