import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box, Divider } from "@mui/material";

function UserDashboard() {
  const role = sessionStorage.getItem("role");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (!role) {
      navigate("/");
    }
  }, [role, navigate]);

  const fetchData = async () => {
    try {
      const authKey = sessionStorage.getItem("authKey");
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        headers: { Authorization: `Basic ${authKey}` }
      });
      const msg = typeof res.data === 'string' ? res.data : res.data.message;
      alert("Success! Server Response: " + msg);
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  const fetchAdminData = async () => {
    try {
      const authKey = sessionStorage.getItem("authKey");
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        headers: { Authorization: `Basic ${authKey}` }
      });
      const msg = typeof res.data === 'string' ? res.data : res.data.message;
      alert("Success! Server Response: " + msg);
    } catch (err) {
      alert("Access Denied! You do not have ADMIN privileges.");
    }
  };

  if (!role) return null; // Avoid render flash before redirect

  return (
    <div className="container mt-4">
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
            User Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Role: {role}
          </Typography>
          
          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" sx={{ mb: 4 }}>
            Welcome! As a <strong>USER</strong>, you have limited access to the system. 
            You can access your profile but you cannot access administrative data.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" color="primary" onClick={fetchData} size="large">
              Get User Profile
            </Button>
            <Button variant="outlined" color="error" onClick={fetchAdminData} size="large">
              Attempt Admin Access
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDashboard;
