# Experiment 7: Role-Based Authorization (RBAC) in Spring Boot

## 🎯 Objective
To implement Role-Based Authorization (RBAC) in a backend application using Spring Boot and Spring Security. The system restricts API access based on assigned user roles (`ROLE_USER` and `ROLE_ADMIN`) and uses an H2 in-memory database.

## 🛠️ Technology Stack
- Java 17
- Spring Boot 3.2.4
- Spring Security (Basic Authentication)
- Spring Data JPA
- H2 Database (In-memory)

## 📁 Project Structure
The project is organized in a standard Spring Boot layer architecture:
- `config/` - Contains Spring Security configuration and database initializers.
- `controller/` - Contains the REST API endpoints.
- `entity/` - Contains the `User` database model.
- `repository/` - Contains the interface to communicate with the database.
- `screenshots/` - Contains Postman tests proving the RBAC implementation.

## 👤 Demo Users
When the application starts, it automatically creates these two users for testing:

| Username | Password | Role       |
|----------|----------|------------|
| user1    | user123  | ROLE_USER  |
| admin1   | admin123 | ROLE_ADMIN |

## 🌐 API Endpoints & Access Rules
The application exposes three different endpoints to test authorization:

1. **Public Endpoint** (Open to everyone without logging in)
   - `GET /api/public/hello`

2. **User Endpoint** (Requires `USER` or `ADMIN` role)
   - `GET /api/user/profile`

3. **Admin Dashboard** (Strictly requires `ADMIN` role)
   - `GET /api/admin/dashboard`

## 🧪 How to Run and Test
1. Compile and run the Spring Boot application on port `8080`.
2. Open **Postman**.
3. Use **Basic Auth** in the Authorization tab to pass the username and password.
4. **Expected Test Results:**
   - Hitting `/api/public/hello` without Auth returns `200 OK`.
   - Hitting `/api/user/profile` as `user1` returns `200 OK`.
   - Hitting `/api/admin/dashboard` as `admin1` returns `200 OK`.
   - Hitting `/api/admin/dashboard` as `user1` returns `403 Forbidden` (Access Denied).
   - Hitting any secure endpoint with no auth returns `401 Unauthorized`.
