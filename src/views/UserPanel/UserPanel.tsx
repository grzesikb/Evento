import { Container, Grid, Paper, Typography } from '@mui/material';

import EventTypeCard from '../../components/EventTypeCard';
import OrderEvents from '../../components/OrderEvents';
import UserEvents from '../../components/UserEvents';

const UserPanel = () => {
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

export default UserPanel;
