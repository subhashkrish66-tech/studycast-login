# StudyCast Login System - Deployment Guide

## Why GitHub Shows "Page Not Found"

GitHub Pages only hosts **static websites** (HTML, CSS, JavaScript), but your StudyCast login system is a **Node.js application** that requires a server to run. That's why you see "Page Not Found" when trying to access it directly on GitHub.

## Deployment Options

### Option 1: Deploy to Render (Recommended)

Since you already have your main StudyCast website on Render, this is the best option:

1. **Go to [Render.com](https://render.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New +"** → **"Web Service"**
4. **Connect your GitHub repository**: `kondamurisubashkrishna/studycast-login`
5. **Configure the service**:
   - **Name**: `studycast-login`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. **Add Environment Variables**:
   - `NODE_ENV` = `production`
   - `JWT_SECRET` = `your-super-secret-jwt-key-change-this-in-production`
   - `MONGODB_URI` = `mongodb+srv://subhashkrishna:Kondamuri%401@cluster0.qt4xf.mongodb.net/studycast`
7. **Click "Create Web Service"**

Your login system will be available at: `https://studycast-login.onrender.com`

### Option 2: Deploy to Heroku

1. **Install Heroku CLI**
2. **Login to Heroku**: `heroku login`
3. **Create Heroku app**: `heroku create studycast-login`
4. **Set environment variables**:
   ```bash
   heroku config:set JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   heroku config:set MONGODB_URI=mongodb+srv://subhashkrishna:Kondamuri%401@cluster0.qt4xf.mongodb.net/studycast
   ```
5. **Deploy**: `git push heroku main`

### Option 3: Deploy to Vercel

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Login**: `vercel login`
3. **Deploy**: `vercel`
4. **Set environment variables** in Vercel dashboard

## Testing Your Deployment

After deployment, test these features:

1. **Visit your deployed URL**
2. **Create a new account** (signup)
3. **Login with your credentials**
4. **Verify redirect** to `https://studycast-1.onrender.com/`
5. **Test logout functionality**

## Integration with Your Main Website

Once deployed, you can:

1. **Link from your main StudyCast website** to the login system
2. **Update your main website** to redirect to the login system for authentication
3. **Use the same MongoDB database** for user management

## Current Status

✅ **GitHub Repository**: [https://github.com/kondamurisubashkrishna/studycast-login](https://github.com/kondamurisubashkrishna/studycast-login)
✅ **All files committed and pushed**
✅ **Deployment configurations ready**
✅ **MongoDB connection working**
✅ **Redirect to StudyCast website configured**

## Next Steps

1. **Deploy to Render** (recommended)
2. **Test the deployed application**
3. **Update your main StudyCast website** to link to the login system
4. **Share the login URL** with your users

Your StudyCast login system is ready for production deployment! 🚀
