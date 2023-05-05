import { Container, Grid, Paper, Typography } from '@mui/material';

import EventTypeCard from './EventTypeCard';
import OrderEvents from './OrderEvents';
import UserEvents from './UserEvents';

const UserDashboard = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ padding: 6, marginTop: 10, borderRadius: 4 }}
    >
      <OrderEvents />
      <UserEvents />
    </Paper>
  );
};

export default UserDashboard;
