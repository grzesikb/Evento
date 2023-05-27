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
import { IWorkersList } from '../../../shared/interfaces/admin.interface';

const AdminDashboard = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [worker, setWorker] = useState<IWorkersList>({
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleCloseDialog = async () => {
    setOpenDialog(false);
  };

  const handleAddWorker = async () => {
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
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Add new worker</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              required
              value={worker.email}
              onChange={(e) => setWorker({ ...worker, email: e.target.value })}
            />
            <TextField
              margin="dense"
              id="firstName"
              label="First Name"
              type="firstName"
              fullWidth
              required
              value={worker.firstName}
              onChange={(e) =>
                setWorker({ ...worker, firstName: e.target.value })
              }
            />
            <TextField
              margin="dense"
              id="lastName"
              label="Last Name"
              type="lastName"
              fullWidth
              required
              value={worker.lastName}
              onChange={(e) =>
                setWorker({ ...worker, lastName: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddWorker}
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
