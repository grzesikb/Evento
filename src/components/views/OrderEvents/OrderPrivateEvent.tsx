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

import Back from '../../common/Back';

const OrderPrivateEvent = () => {
  return (
    <Paper variant="outlined" sx={{ padding: 6, borderRadius: 4 }}>
      <Back onClick={() => {}} />
      <Box style={{ display: 'flex' }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, mr: 2 }}
        >
          Order Private Event
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
          Presentation, Conference for companies
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
              id="company"
              label="Company Name"
              name="company"
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
                control={<Checkbox color="success" />}
                label="Catering package"
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
        >
          Order private event
        </Button>
      </Box>
    </Paper>
  );
};

export default OrderPrivateEvent;
