import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';
import Navbar from '../../common/Navbar/Navbar';
import Alert from '../../common/Alert';
import WorkerList from './WorkerList';

const AdminDashboard = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      <Navbar email="admin@gmail.com" permission="Admin" />
      <Paper
        variant="outlined"
        sx={{ padding: 3, marginTop: 10, borderRadius: 4 }}
      >
        <Button
          variant="contained"
          sx={{ fontWeight: 600, float: 'right' }}
          onClick={() => setOpenDialog(true)}
        >
          Add Worker
        </Button>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>Add new worker</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="firstName"
              fullWidth
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastName"
              label="Last Name"
              type="lastName"
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <WorkerList />
      </Paper>
      <Alert />
    </Box>
  );
};

export default AdminDashboard;
