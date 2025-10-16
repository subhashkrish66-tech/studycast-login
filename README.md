# StudyCast Login & Signup System

A modern, responsive login and signup page with MongoDB integration, featuring a sleek black and orange design.

## Features

- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **User Authentication**: Secure login and signup functionality
- ✅ **MongoDB Integration**: User data stored in MongoDB Atlas
- ✅ **Password Security**: Passwords are hashed using bcrypt
- ✅ **JWT Authentication**: Secure token-based authentication
- ✅ **Form Validation**: Client-side and server-side validation
- ✅ **Modern UI**: Beautiful black and orange color scheme with glassmorphism effects
- ✅ **Dashboard**: Simple user dashboard after successful login

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing

## Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd studycast-login
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - The MongoDB connection string is already configured in `server.js`
   - For production, create a `.env` file with:
   ```env
   PORT=3000
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   MONGODB_URI=mongodb+srv://subhashkrish66_db_user:subhashkrish66_db_user@subhash1.uvonm7n.mongodb.net/studycast
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and go to `http://localhost:3000`

## Project Structure

```
studycast-login/
├── index.html          # Main login/signup page
├── dashboard.html      # User dashboard after login
├── styles.css          # CSS styling with black/orange theme
├── script.js           # Frontend JavaScript logic
├── server.js           # Node.js/Express server
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## API Endpoints

### Authentication Routes

- `POST /api/signup` - Create a new user account
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /api/login` - Login with existing credentials
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `GET /api/profile` - Get user profile (requires authentication)
- `POST /api/logout` - Logout user

### Response Format

**Success Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}
```

**Error Response:**
```json
{
  "message": "Error message here"
}
```

## Features Explained

### Frontend Features

1. **Dynamic Form Switching**: Toggle between login and signup forms
2. **Real-time Validation**: Instant feedback on form inputs
3. **Responsive Design**: Adapts to different screen sizes
4. **Loading States**: Visual feedback during API calls
5. **Error Handling**: User-friendly error messages
6. **Auto-redirect**: Automatic redirection after successful login

### Backend Features

1. **MongoDB Integration**: Connected to MongoDB Atlas cloud database
2. **Password Hashing**: Secure password storage using bcrypt
3. **JWT Authentication**: Stateless authentication system
4. **Input Validation**: Server-side validation using express-validator
5. **Error Handling**: Comprehensive error handling and logging
6. **CORS Support**: Cross-origin resource sharing enabled

### Security Features

1. **Password Hashing**: Passwords are never stored in plain text
2. **JWT Tokens**: Secure token-based authentication
3. **Input Validation**: Both client and server-side validation
4. **Environment Variables**: Sensitive data stored in environment variables
5. **CORS Configuration**: Proper cross-origin setup

## Usage

### Sign Up Process

1. Click "Sign up" link on the login page
2. Fill in the required information:
   - Full Name
   - Email Address
   - Password (minimum 6 characters)
   - Confirm Password
3. Click "Sign Up" button
4. Upon successful registration, you'll be redirected to login

### Login Process

1. Enter your email and password
2. Click "Login" button
3. Upon successful login, you'll be redirected to the dashboard
4. Your session will be maintained until you logout

### Dashboard

- View your profile information
- Access logout functionality
- Secure token-based authentication

## Deployment

### Local Development

```bash
npm run dev
```

### Production Deployment

1. Set environment variables for production
2. Use a process manager like PM2
3. Set up proper SSL certificates
4. Configure your domain and DNS

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the GitHub repository.

## Screenshots

The application features:
- Modern black and orange color scheme
- Glassmorphism design effects
- Responsive layout
- Smooth animations and transitions
- Professional user interface

---

**Note**: Remember to change the JWT secret and MongoDB credentials for production use!
