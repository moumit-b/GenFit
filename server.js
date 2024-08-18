const dotenv = require('dotenv');
dotenv.config();  

const express = require('express');
const mongoose = require('mongoose');
const firebaseAdmin = require('./config/firebaseConfig');


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import routes
const authRoutes = require('./routes/authRoutes');
const geneticDataRoutes = require('./routes/geneticDataRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/genetic-data', geneticDataRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Test for Firebase route
app.get('/api/test-firebase', async (req, res) => {
  try {
    const userRecord = await firebaseAdmin.auth().getUserByEmail('testuser@example.com');
    res.status(200).json(userRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


/* PERSONAL NOTES
Example Workflow
A user opens your mobile app (React Native) and logs in.
The app sends a POST request to the backend server at /api/auth/login.
The server.js file routes this request to the appropriate controller via the authRoutes module.
The controller processes the login request by verifying the user against the database and Firebase Authentication.
The server responds to the frontend with a success message and possibly a token for further authenticated requests.
*/
