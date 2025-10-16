# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Access the Application**
   - Open your browser and go to `http://localhost:3000`

## GitHub Deployment

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Commit Changes
```bash
git commit -m "Initial commit: StudyCast login and signup system"
```

### Step 4: Create GitHub Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name it "studycast-login" or any name you prefer
4. Don't initialize with README (we already have one)
5. Click "Create Repository"

### Step 5: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

## Environment Variables

Create a `.env` file in your project root:
```env
PORT=3000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
MONGODB_URI=mongodb+srv://subhashkrish66_db_user:subhashkrish66_db_user@subhash1.uvonm7n.mongodb.net/studycast
```

## Production Deployment

### Heroku Deployment
1. Install Heroku CLI
2. Login to Heroku
3. Create a new app
4. Set environment variables
5. Deploy

```bash
heroku create your-app-name
heroku config:set JWT_SECRET=your-production-secret
heroku config:set MONGODB_URI=your-mongodb-uri
git push heroku main
```

### Vercel Deployment
1. Install Vercel CLI
2. Login to Vercel
3. Deploy

```bash
npm i -g vercel
vercel
```

## Testing

### Manual Testing
1. Start the server
2. Open `http://localhost:3000`
3. Try to sign up with a new account
4. Try to login with the created account
5. Check if dashboard loads correctly
6. Test logout functionality

### API Testing with Postman/curl
```bash
# Signup
curl -X POST http://localhost:3000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check if the connection string is correct
   - Ensure MongoDB Atlas allows connections from your IP

2. **Port Already in Use**
   - Change the PORT in your .env file
   - Or kill the process using the port

3. **JWT Secret Error**
   - Make sure JWT_SECRET is set in environment variables

4. **Dependencies Not Found**
   - Run `npm install` again
   - Check if all dependencies are listed in package.json
