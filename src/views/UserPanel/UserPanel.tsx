import { Container, Grid, Paper, Typography } from '@mui/material';

import Navbar from '../../components/Navbar';
import EventTypeCard from '../../components/EventTypeCard';
import OrderEvents from '../../components/OrderEvents';
import UserEvents from '../../components/UserEvents';

const UserPanel = () => {
  return (
    <div>
      <Navbar />
      <Container fixed maxWidth="lg">
        <Paper
          variant="outlined"
          sx={{ padding: 6, marginTop: 10, borderRadius: 4 }}
        >
          <OrderEvents />
          <UserEvents />
        </Paper>
      </Container>
    </div>
  );
};

export default UserPanel;
