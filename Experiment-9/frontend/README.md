# Experiment 9 - Frontend Integration with RBAC

This project implements a session-based React frontend for the underlying Spring Boot Role-Based Access Control (RBAC) backend. It leverages Material UI and Bootstrap to securely demonstrate authenticating users, managing sessions, and enforcing UI restrictions based on administrative roles.

# Core Implementations

# 1. React Frontend Integrates RBAC Backend
The React interface acts as the presentation layer for the `Experiment-7-RBAC` Spring Boot backend. 
Using `axios`, requests are communicated natively to the local server `http://localhost:8080/`. The backend is strictly configured with Spring Security, necessitating proper encoded basic authentication headers or authenticated JSESSIONID cookies to intercept and permit the cross-origin requests.

# 2. Role Stored in sessionStorage
To maintain authentication state without leveraging complex JWT decoding in the frontend, the session status is handled effectively:
- Upon a successful HTTP 200 OK from the `/api/user/profile` endpoint, the `Login.js` component writes the user's `role`, `username`, and `authKey` securely into browser `sessionStorage`.
- Both `AdminDashboard.js` and `UserDashboard.js` use `useEffect` hooks to immediately analyze the `sessionStorage.getItem("role")` on component mount, kicking any unauthenticated users out to the login screen.
- On logout, `sessionStorage.clear()` completely wipes the session natively.

# 3. UI Changes Based on Role
The React application utilizes literal role-based element rendering to securely separate privileged and non-privileged flows:
- **Navbar Rendering**: Navigational components (like the 'Admin Panel' button route) are actively parsed using truthy checks (`role === 'ADMIN'`). Standard users physically cannot render or click buttons outside their permission scopes.
- **Role-Based Dashboards**: The entire route tree enforces restrictions. An attempt to navigate to `/admin` as a standard user results in the `AdminDashboard.js` validating the state and tossing an access denied alert before redirecting manually to `/`.

# 4. Secure API Calls Enforced
UI obfuscation is not enough; the actual resources are intrinsically locked to roles. 
- While logged in as `user1`, clicking the "Attempt Admin Access" button fires an isolated `axios` call to `/api/admin/dashboard`. Since Spring Security intercepts the cross-origin preflight and identifies the user strictly as `ROLE_USER`, it responds with a rigid `HTTP 401/403 Unauthorized`, catching automatically in React to cleanly present an error rather than raw backend data.

# Getting Started

1. Ensure the backend (Experiment 7) is running strictly on port `8080` with the `securityFilterChain` configured to accept `localhost:3000` CORS settings and customized HTTP Basic entry points dynamically.
2. Run `npm install` inside this frontend directory to satisfy UI libraries (`@mui/material`, `bootstrap`, `axios`, `react-router-dom`).
3. Run `npm start` and sign in utilizing the seeded credentials: `user1`/`user123` or `admin1`/`admin123`.
