import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Orchid Dashboard
        </Typography>
        <Link
          to="/"
          style={{
            color: 'white',
            marginRight: 15,
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
