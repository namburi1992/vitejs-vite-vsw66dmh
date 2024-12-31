import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const SnapshotDialog = ({ image, onclose }) => {
  return (
    <Dialog open={!!image} onclose={onclose}>
      <DialogTitle>Snapshot</DialogTitle>
      <DialogContent>
        <img src={image} alt="snapshot" style={{ width: '100%' }} />
      </DialogContent>
    </Dialog>
  );
};

export default SnapshotDialog;
