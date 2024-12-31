import React, { useState } from 'react';
import { Container, Button, Pagination } from '@mui/material';
import Filters from '../components/Filters';
import CameraTable from '../components/CameraTable';
import SnapshotDialog from '../components/SnapShotDialog';
import mockData from '../mockData';

const HomePage = () => {
  const [division, setDivision] = useState('');
  const [store, setStore] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortField, setSortField] = useState('ip');
  const [page, setPage] = useState(1);
  const [dialogImage, setDialogImage] = useState(null);

  const pageSize = 10;

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handlePagechange = (event, value) => {
    setPage(value);
  };

  const handleDialogOpen = (image) => {
    setDialogImage(image);
  };

  const handleDialogClose = () => {
    setDialogImage(null);
  };

  const filteredData = mockData
    .filter((item) => (division ? item.division === division : true))
    .filter((item) => (store ? item.store === store : true))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    })
    .slice((page - 1) * pageSize, page * pageSize);
  // return (
  //   <Container>
  //     <Filters
  //       division={division}
  //       setDivision={setDivision}
  //       store={store}
  //       setStore={setStore}
  //       sortOrder={sortOrder}
  //       setSortOrder={setSortOrder}
  //       onSubmit={() => setPage(1)}
  //     />
  //     <CameraTable
  //       data={filteredData}
  //       sortField={sortField}
  //       sortOrder={sortOrder}
  //       onSort={handleSort}
  //       onDialogOpen={handleDialogOpen}
  //     />
  //     <Pagination
  //       count={Math.ceil(mockData.length / pageSize)}
  //       page={page}
  //       onChange={handlePagechange}
  //       style={{ marginTop: '20px' }}
  //     />
  //     <SnapshotDialog image={dialogImage} onClose={handleDialogClose} />
  //   </Container>
  // );
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/4">
          <Filters
            division={division}
            setDivision={setDivision}
            store={store}
            setStore={setStore}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onSubmit={() => setPage(1)}
          />
        </div>
        <div className="lg:w-3/4">
          <CameraTable
            data={filteredData}
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={handleSort}
            onDialogOpen={handleDialogOpen}
          />
          <div className="mt-4">
            <Pagination
              count={Math.ceil(mockData.length / pageSize)}
              page={page}
              onChange={handlePagechange}
            />
          </div>
        </div>
      </div>
      <SnapshotDialog image={dialogImage} onClose={handleDialogClose} />
    </div>
  );
};

export default HomePage;
