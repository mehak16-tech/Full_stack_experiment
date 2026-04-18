import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, CardContent, Typography, Alert, Box } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Ensure axios sends cookies so JSESSIONID is preserved for subsequent requests
  axios.defaults.withCredentials = true;

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const cleanUsername = username.trim();
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username: cleanUsername, password }
      });

      if (res.status === 200) {
        sessionStorage.setItem("user", cleanUsername);
        
        sessionStorage.setItem("role", cleanUsername.toLowerCase().includes("admin") ? "ADMIN" : "USER");

        // Automatically store the base64 auth token if relying on explicit headers instead of purely jsessions
        sessionStorage.setItem("authKey", btoa(cleanUsername + ":" + password));
        
        if (cleanUsername.toLowerCase().includes("admin")) {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please try again.");
      } else {
        setError("Network error or backend is unreachable.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <Card sx={{ maxWidth: 450, width: '100%', p: 3, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom align="center" fontWeight="bold">
            Sign In
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Use your RBAC credentials to authenticate
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
          
          <form onSubmit={login}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{ py: 1.5, fontSize: '1.1rem' }}
            >
              {loading ? "Authenticating..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
