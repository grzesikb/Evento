import React from 'react';
import { Box, Paper } from '@mui/material';
import Navbar from '../../common/Navbar/Navbar';
import Alert from '../../common/Alert';

const WorkerDashboard = () => {
  return (
    <Box>
      <Navbar email="worker@gmail.com" permission="Worker" />
      <Paper
        variant="outlined"
        sx={{ padding: 6, marginTop: 10, borderRadius: 4 }}
      >
        asd
      </Paper>
      <Alert />
    </Box>
  );
};

export default WorkerDashboard;
