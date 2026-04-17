# Experiment 8: Frontend Integration with JWT APIs

## Overview
This experiment demonstrates how a modern React frontend seamlessly integrates with a secure Spring Boot backend API using JSON Web Tokens (JWT) for authentication. The primary goal is to establish a secure, session-based user experience without relying on traditional server-side cookies.

# Technical Explanation of the Flow

# 1. Connecting the React Frontend to Backend APIs
The user interface is built entirely in React and leverages the `axios` library to make HTTP requests across the network to the Spring Boot backend. When a user submits their credentials via the Login form, the React app sends a `POST` request to the backend's `/login` endpoint. The server validates these credentials and, upon success, responds with a secure JWT payload.

# 2. Session-Based JWT Storage
Once the frontend receives the JWT from the backend, it securely stores the token inside the browser's `sessionStorage`. This approach ensures that the token is kept alive during the active browser session, acting as a digital passport for the user. Because it is tied to the session, simply closing the browser tab will automatically destroy the token, inherently enhancing the application's security.

# 3. Accessing Protected Routes
The application features a secure Dashboard that is strictly restricted from unauthorized public access. When the user attempts to fetch restricted data, the React application retrieves the saved JWT from `sessionStorage`, attaches it directly into the `Authorization: Bearer <token>` HTTP header, and sends a `GET` request to the `/protected` API endpoint. The backend inspects this header, mathematically verifies the token's signature, and only returns the sensitive text if the token is entirely valid. If a user tries to bypass the login screen without a valid token in their storage, the frontend router instantly redirects them back to the login page.

# 4. Secure Logout Functionality
To cleanly terminate the session, a Logout button is provided. When the user interacts with this button, the application destroys the active session by using `sessionStorage.removeItem("token")`. With the token erased, the application's state resets, the user loses their authorization clearance, and the UI immediately redirects them to the Login screen to prevent further access.
