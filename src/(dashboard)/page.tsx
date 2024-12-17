import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import OrchidTable from '../components/OrchidTable';
import { fetchOrchids } from '../services/orchidService';

function Home() {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrchids = async () => {
      try {
        const data = await fetchOrchids();
        setOrchids(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadOrchids();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Orchids Dashboard
      </Typography>
      <OrchidTable orchids={orchids} />
    </>
  );
}

export default Home;
