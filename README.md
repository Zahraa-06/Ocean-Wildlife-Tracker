# Ocean Wildlife Tracker 🐋

A citizen science application that enables users to log marine animal sightings to support conservation efforts. Built with Express.js, and MongoDB.

![App Screenshot](/public/images/screenshot.png)

## Features

-  User authentication system (JWT)
-  Interactive map with sighting markers
-  Photo uploads for sightings
-  Species conservation status tracking
-  Location validation for sightings
-  NOAA API integration for species data

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT Authentication
- (Image storage)

**Frontend:**
- CSS Styling
- JSX


## API Routes

### Authentication Routes

| Method | Endpoint        | Description                | Auth Required |
|--------|-----------------|----------------------------|---------------|
| POST   | /auth/signup    | Register new user          | No            |
| POST   | /auth/login     | User login                 | No            |
| GET    | /auth/logout    | User logout                | Yes           |

### Sighting Routes

| Method | Endpoint               | Description                     | Auth Required |
|--------|------------------------|---------------------------------|---------------|
| GET    | /sightings             | List all sightings              | No            |
| GET    | /sightings/new         | Show new sighting form          | Yes           |
| POST   | /sightings             | Create new sighting             | Yes           |
| GET    | /sightings/:id         | Show single sighting            | No            |
| GET    | /map                   | Interactive map view            | No            |

### Species Routes

| Method | Endpoint        | Description                | Auth Required |
|--------|-----------------|----------------------------|---------------|
| GET    | /species        | List all species           | No            |
| GET    | /species/:id    | Show species details       | No            |

### API Endpoints

| Method | Endpoint        | Description                | Auth Required |
|--------|-----------------|----------------------------|---------------|
| GET    | /api/species    | Get all species data       | No            |
| POST   | /api/sightings  | Create new sighting        | Yes (JWT)     |
| GET    | /api/sightings  | Get all sightings data     | No            |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zahraa-06/Ocean-Wildlife-Tracker
   cd Ocean-Wildlife-Tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser to:
   ```
   http://localhost:3000
   ```

## Testing

To run the test suite:
```bash
npm run test
```

This will execute:
- Model validation tests
- API endpoint tests
- Authentication tests

## Environment Variables

The following environment variables are required:

| Variable                | Description                          |
|-------------------------|--------------------------------------|
| MONGODB_URI             | MongoDB connection string            |
| JWT_SECRET              | Secret key for JWT tokens            |
| CLOUDINARY_CLOUD_NAME   | Cloudinary cloud name                |
| CLOUDINARY_API_KEY      | Cloudinary API key                   |
| CLOUDINARY_API_SECRET   | Cloudinary API secret                |

## Contact

Project Maintainer - [Your Name](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/marine-wildlife-tracker](https://github.com/yourusername/marine-wildlife-tracker)