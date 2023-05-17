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

import AppContainer from '../../common/AppContainer';

const OrderPrivateEvent = () => {
  return (
    <AppContainer
      back="/app/dashboard"
      label="Order Private Event"
      additionalLabel="Presentation, Conference for companies"
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
    </AppContainer>
  );
};

export default OrderPrivateEvent;
