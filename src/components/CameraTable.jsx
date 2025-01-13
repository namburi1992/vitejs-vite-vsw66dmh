import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';




import DeleteIcon from '@mui/icons-material/Delete';
import LockResetIcon from '@mui/icons-material/LockReset';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CameraTable = ({ data, sortField, sortOrder, onSort, onDialogOpen }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <><TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortField === 'ip'}
                direction={sortOrder}
                onClick={() => onSort('ip')}
              >
                IP Address
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === 'name'}
                direction={sortOrder}
                onClick={() => onSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Encryption</TableCell>
            <TableCell>Snapshot</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Decryption</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.ip}</TableCell>
              <TableCell style={{ color: item.offline ? 'red' : 'inherit' }}>
                {item.name}
              </TableCell>
              <TableCell>
                {item.encrypted ? 'Encrypted' : 'Unencrypted'}
              </TableCell>
              <TableCell>
                {item.offline ? null : (
                  <img
                    src={item.snapShot}
                    alt="snapshot"
                    style={{ maxWidth: '100px', cursor: 'pointer' }}
                    onClick={() => onDialogOpen(item.snapShot)} />
                )}
              </TableCell>
              <TableCell>
                Online
              </TableCell>
              <TableCell>
                <Button size="small" onClick={handleOpen} startIcon={<LockResetIcon />}>

                </Button>

                {/* after decrytpion this button will be disabled */}
                {/* <Button size="small" disabled onClick={handleOpen} startIcon={<LockResetIcon />}>

                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography variant="h6" gutterBottom>
              Decryption Time
            </Typography>

            <Stack spacing={2} direction="row">

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                  <TimePicker label="Select the time" />
                </DemoContainer>
              </LocalizationProvider>

              <Button variant="contained" size="small">Submit</Button>

            </Stack>




          </Box>
        </Modal>
      </div></>





  );
};

export default CameraTable;
