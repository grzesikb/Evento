import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import EventTypeCard from './EventTypeCard';

const OrderEvents = () => {
  return (
    <Container>
      <Paper
        variant="outlined"
        sx={{ display: 'flex', padding: 6, marginTop: 10, borderRadius: 4 }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: 3 }}
            >
              Order an event. Choose a package
            </Typography>
          </Grid>
          <Grid item xs>
            <EventTypeCard
              src="./assets/Card-PublicParty.jpg"
              header="Public Event"
              additional="Dance parties, Concerts, Club events"
            />
          </Grid>
          <Grid item xs>
            <EventTypeCard
              src="./assets/Card-PrivateParty.jpg"
              header="Private Event"
              additional="Presentation, Conference for companies"
            />
          </Grid>
          <Grid item xs>
            <EventTypeCard
              src="./assets/Card-CelebrationParty.jpg"
              header="Celebration Event"
              additional="Birthdays, Name days, Bachelorette parties"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OrderEvents;
