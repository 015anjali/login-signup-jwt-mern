Sure! Here's the full README in a single text:

---

# Login-Signup JWT MERN Application

This is a **Login and Signup application** built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) that uses **JWT authentication** to securely handle user sessions. It provides a robust backend and a simple user interface for user authentication.

---

## Features

- User registration with hashed passwords.
- Passwords hashed using Bcrypt hashing.
- Secure login using JWT (JSON Web Tokens).
- Integration with MongoDB for user data storage.
- RESTful API design.
- Backend built with **Node.js** and **Express.js**.
- Frontend built with **React.js** (if applicable, else mention client-side logic with vanilla JS).

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn package manager

---

## Installation

Follow these steps to get the application running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/015anjali/login-signup-jwt-mern.git
```

### 2. Navigate to the Project Directory

```bash
cd login-signup-jwt-mern
```

### 3. Install Backend Dependencies

```bash
npm install
```

This will install all necessary packages as listed in the `package.json` file for the backend.

---

## Setup

### Environment Variables

Create a `.env` file in the root directory of your project and add the following keys with appropriate values:

```env
DBURI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

Replace `<username>`, `<password>`, and `<database>` with your MongoDB credentials.

---

## Usage

### 1. Start the Backend Server

To start the Express.js server, run:

```bash
npm start
```

This will run the backend on `http://localhost:5000` (or your specified port).

### 2. (Optional) Start the Frontend

If you have a React frontend, navigate to the frontend directory and run:

```bash
npm start
```

By default, the frontend will run on `http://localhost:3000`.

---

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login an existing user and receive a JWT.

---

## Technologies Used

- **MongoDB**: Database for storing user data.
- **Express.js**: Backend framework for building RESTful APIs.
- **React.js**: Frontend library for user interfaces (if applicable).
- **Node.js**: JavaScript runtime environment.
- **JWT**: Secure token-based authentication.

---

## Contributing

Feel free to fork this repository and submit pull requests for new features or bug fixes.

---

## License

This project is licensed under the MIT License.

---

## Author

**Anjali Krishna**  
GitHub: [015anjali](https://github.com/015anjali)

---
