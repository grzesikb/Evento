import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import EventTypeCard from './EventTypeCard';
import OrderEventsPanel from './OrderEventsPanel';
import UserEvents from './UserEvents';
import Navbar from '../../common/Navbar/Navbar';
import Alert from '../../common/Alert';

const UserDashboard = () => {
  return (
    <Box>
      <Navbar email="pimpek@gmail.com" permission="User" />
      <Paper
        variant="outlined"
        sx={{ padding: 6, marginTop: 10, borderRadius: 4 }}
      >
        <OrderEventsPanel />
        <UserEvents />
      </Paper>
      <Alert />
    </Box>
  );
};

export default UserDashboard;
