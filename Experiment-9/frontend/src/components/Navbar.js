import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");
  const user = sessionStorage.getItem("user");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => role && navigate(role === 'ADMIN' ? '/admin' : '/user')}>
          RBAC Auth System
        </Typography>
        <Box>
          {role && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {role === 'ADMIN' && (
                <Button color="inherit" onClick={() => navigate('/admin')} sx={{ mr: 2, border: '1px solid white' }}>
                  Admin Panel
                </Button>
              )}
              <Typography variant="body1" component="span" sx={{ mr: 3 }}>
                Welcome, {user} (<strong>{role}</strong>)
              </Typography>
              <Button color="inherit" variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
