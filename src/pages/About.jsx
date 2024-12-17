import React from 'react';
import { Typography } from '@mui/material';

function About() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        About Orchid Dashboard
      </Typography>
      <Typography variant="body1">
        This dashboard displays information about orchids from an external API.
        It provides a paginated view of orchid names and their availability.
      </Typography>
    </>
  );
}

export default About;
