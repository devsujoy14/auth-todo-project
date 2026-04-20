# Auth Todo Project

A Node.js authentication system built with Express.js, JWT, and bcryptjs.

## Features

- User signup and login
- JWT-based authentication
- Password hashing with bcryptjs
- User database management
- Protected routes

## Installation

```bash
npm install
```

## Setup

1. Create a `.env` file with your configuration:
```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
SALT_ROUNDS=10
DATABASE_URL=./src/database/user.json
```

2. Start the development server:
```bash
npm run dev
```

## API Endpoints

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/verify` - Verify token

## Project Structure

```
/src
  /controllers
    └── auth.controller.js
  /routes
    └── auth.routes.js
  /database
    └── user.json
  └── index.js
```

## License

MIT
