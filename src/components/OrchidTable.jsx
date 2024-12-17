import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OrchidTable({ orchids }) {
  // Define columns for the DataGrid
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'isAvailable',
      headerName: 'Available',
      flex: 1,
      valueFormatter: (params) => (params.value ? 'Yes' : 'No'),
    },
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
    },
  ];
  const handleRowClick = (params) => {
    alert(`/orchids/${params.row.id}`);
  };
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={orchids}
        columns={columns}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}

export default OrchidTable;
