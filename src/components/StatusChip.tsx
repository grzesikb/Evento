import { Chip } from '@mui/material';
import React from 'react';

interface IProps {
  type: string;
}
const StatusChip = ({ type }: IProps) => {
  return (
    <div>
      {type === 'inProgress' && (
        <Chip label="In progress" size="small" color="success" />
      )}
      {type === 'Verification' && (
        <Chip label="Waiting for verification" size="small" color="warning" />
      )}
      {type === 'Finished' && <Chip label="Finished" size="small" />}
    </div>
  );
};

export default StatusChip;
