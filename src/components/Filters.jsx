import React, { useState } from 'react';
import {
  Paper,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  FormControl,
  Collapse,
} from '@mui/material';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Filters = ({
  division,
  setDivision,
  store,
  setStore,
  sortOrder,
  setSortOrder,
  onSubmit,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const divisions = ['Division 1', 'Division 2', 'Division 3'];
  const stores = ['Store A', 'Store B', 'Store C'];

  const handleClearFilters = () => {
    setDivision('');
    setStore('');
    setSortOrder('asc');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', marginTop:'1rem', textAlign:'left' } }}
    noValidate
    autoComplete="off"
  >
      <div>
      <TextField
            select
            label="Select Division"
            value={division}
             onChange={(e) => setDivision(e.target.value)}
            fullWidth
            size="medium"
            helperText="Choose a division to filter"
          >
            {divisions.map((div) => (
              <MenuItem key={div} value={div}>
                {div}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Store"
            value={store}
            onChange={(e) => setStore(e.target.value)}
            fullWidth
            size="medium"
            helperText="Select a store from the list"
          >
            {stores.map((str) => (
              <MenuItem key={str} value={str}>
                {str}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Sort Order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            fullWidth
            size="medium"
            helperText="Choose the sorting direction"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </TextField>

            <Button
              variant="outlined"
              onClick={handleClearFilters}
              size="large"
              sx={{
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                marginTop:'1.15rem',
                flex: 1,
              }}
            >
              Clear Filters
            </Button>

          

          
      </div>
      
      </Box>





      
    


    // <Paper
    //   elevation={2}
    //   sx={{
    //     maxWidth: 400,
    //     mx: 'auto',
    //     p: 3,
    //     borderRadius: 2,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'space-between',
    //       mb: 2,
    //     }}
    //   >
    //     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    //       <FilterAltIcon color="primary" />
    //       <Typography variant="h6" component="h2">
    //         Filter Options
    //       </Typography>
    //     </Box>
    //     <IconButton onClick={toggleExpand} size="small">
    //       {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    //     </IconButton>
    //   </Box>

    //   <Collapse in={isExpanded}>
    //     <Stack spacing={3}>
    //       <TextField
    //         select
    //         label="Select Division"
    //         value={division}
    //         onChange={(e) => setDivision(e.target.value)}
    //         fullWidth
    //         size="medium"
    //         helperText="Choose a division to filter"
    //       >
    //         {divisions.map((div) => (
    //           <MenuItem key={div} value={div}>
    //             {div}
    //           </MenuItem>
    //         ))}
    //       </TextField>

    //       <TextField
    //         select
    //         label="Select Store"
    //         value={store}
    //         onChange={(e) => setStore(e.target.value)}
    //         fullWidth
    //         size="medium"
    //         helperText="Select a store from the list"
    //       >
    //         {stores.map((str) => (
    //           <MenuItem key={str} value={str}>
    //             {str}
    //           </MenuItem>
    //         ))}
    //       </TextField>

    //       <TextField
    //         select
    //         label="Sort Order"
    //         value={sortOrder}
    //         onChange={(e) => setSortOrder(e.target.value)}
    //         fullWidth
    //         size="medium"
    //         helperText="Choose the sorting direction"
    //       >
    //         <MenuItem value="asc">Ascending</MenuItem>
    //         <MenuItem value="desc">Descending</MenuItem>
    //       </TextField>

    //       <Box sx={{ display: 'flex', gap: 2 }}>
    //         <Button
    //           variant="outlined"
    //           onClick={handleClearFilters}
    //           size="large"
    //           sx={{
    //             py: 1.5,
    //             textTransform: 'none',
    //             fontSize: '1rem',
    //             flex: 1,
    //           }}
    //         >
    //           Clear Filters
    //         </Button>
    //         <Button
    //           variant="contained"
    //           onClick={onSubmit}
    //           size="large"
    //           sx={{
    //             py: 1.5,
    //             textTransform: 'none',
    //             fontSize: '1rem',
    //             flex: 1,
    //           }}
    //         >
    //           Apply Filters
    //         </Button>
    //       </Box>
    //     </Stack>
    //   </Collapse>
    // </Paper>
  );
};

export default Filters;
