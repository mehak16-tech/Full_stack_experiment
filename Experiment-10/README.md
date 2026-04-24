# Experiment 10: CRUD Operations on Database using Node.js + Express.js Backend

This experiment demonstrates how to perform CRUD Operations (Create, Read, Update, Delete) on a database using Node.js and Express.js as the backend, connected to a cloud MongoDB Atlas database.

## 🎯 Objective
*   Build REST APIs using Node.js and Express.js
*   Connect backend with a database (MongoDB Atlas)
*   Perform Create, Read, Update, Delete operations
*   Test APIs using Postman
*   Understand backend routing, controllers, and environment variables

## 🧩 Features Implemented
1.  **Create Record**: Add new student data (`name`, `email`, `course`) into the database.
2.  **Read Records**: Fetch all student records or a single record using its ID.
3.  **Update Record**: Modify existing student data using its ID.
4.  **Delete Record**: Remove a student record using its ID.

## 💻 Tech Stack
*   **Node.js**: JavaScript runtime for backend execution.
*   **Express.js**: Backend web framework for creating REST APIs.
*   **MongoDB Atlas**: Cloud NoSQL database to store records.
*   **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
*   **dotenv**: Module to securely load environment variables.
*   **Postman**: Tool for testing the API endpoints.

## ⚙️ Setup & Installation

1.  **Clone or Open the Project**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    *   Create a `.env` file in the root directory.
    *   Add your MongoDB Atlas connection string like this:
        ```env
        MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/collegeDB?retryWrites=true&w=majority
        ```
4.  **Start the server:**
    ```bash
    npm start
    ```
    *(This runs `nodemon server.js` which automatically restarts the server on code changes).*

5.  **Server runs on:** `http://localhost:5000`

## 🧪 API Endpoints (Testing via Postman)

### 1. Create Record
*   **Method:** `POST`
*   **URL:** `http://localhost:5000/api/students`
*   **Body (JSON):**
    ```json
    {
      "name": "Rahul",
      "email": "rahul@gmail.com",
      "course": "BCA"
    }
    ```

### 2. Read All Records
*   **Method:** `GET`
*   **URL:** `http://localhost:5000/api/students`

### 3. Read Single Record
*   **Method:** `GET`
*   **URL:** `http://localhost:5000/api/students/:id`

### 4. Update Record
*   **Method:** `PUT`
*   **URL:** `http://localhost:5000/api/students/:id`
*   **Body (JSON):**
    ```json
    {
      "course": "MCA"
    }
    ```

### 5. Delete Record
*   **Method:** `DELETE`
*   **URL:** `http://localhost:5000/api/students/:id`

## 📘 Explanation
*   **Node.js and Express.js** are used together to serve backend endpoints.
*   **MongoDB Atlas** provides a public cloud database so the project can be accessed and deployed anywhere without relying on a local database instance.
*   **Environment variables** (`.env`) are used to securely store the database connection string, preventing sensitive credentials from being hardcoded into the source code.
*   **CRUD operations** are fully implemented using REST API standards (GET, POST, PUT, DELETE).
