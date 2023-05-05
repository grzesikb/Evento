import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import EventTypeCard from './EventTypeCard';
import OrderEvents from './OrderEvents';
import UserEvents from './UserEvents';
import Navbar from '../../common/Navbar/Navbar';

const UserDashboard = () => {
  return (
    <Box>
      <Navbar />
      <Paper
        variant="outlined"
        sx={{ padding: 6, marginTop: 10, borderRadius: 4 }}
      >
        <OrderEvents />
        <UserEvents />
      </Paper>
    </Box>
  );
};

export default UserDashboard;
