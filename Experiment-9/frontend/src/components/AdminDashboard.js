import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box, Divider } from "@mui/material";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (role !== "ADMIN") {
      alert("Access Denied: Admin privileges required.");
      navigate("/");
    }
  }, [role, navigate]);

  const fetchAdminData = async () => {
    try {
      const authKey = sessionStorage.getItem("authKey");
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        headers: { Authorization: `Basic ${authKey}` }
      });
      const msg = typeof res.data === 'string' ? res.data : res.data.message;
      alert("Success! Admin Data: " + msg);
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };
  
  const fetchUserData = async () => {
    try {
      const authKey = sessionStorage.getItem("authKey");
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        headers: { Authorization: `Basic ${authKey}` }
      });
      const msg = typeof res.data === 'string' ? res.data : res.data.message;
      alert("Success! User Data Accessed by Admin: " + msg);
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  if (role !== "ADMIN") return null;

  return (
    <div className="container mt-4">
      <Card sx={{ boxShadow: 4, borderRadius: 2, borderTop: '5px solid #d32f2f' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" color="error.main" gutterBottom fontWeight="bold">
            Admin Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Role: {role}
          </Typography>
          
          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" sx={{ mb: 4 }}>
            Welcome to the <strong>Administrator</strong> panel. You have full access to both User and Admin resources.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" color="error" onClick={fetchAdminData} size="large">
              Access Admin API
            </Button>
            <Button variant="contained" color="primary" onClick={fetchUserData} size="large">
              Access User API
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminDashboard;
