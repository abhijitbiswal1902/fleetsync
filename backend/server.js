// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
// const fleetRoutes = require('./routes/fleet');


// const app = express();
// connectDB();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// app.use('/api/users', userRoutes);
// app.use('/api/fleet', fleetRoutes);


// require('dotenv').config();
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const fleetRoutes = require('./routes/fleet');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const Server = http.createServer(app);

// Get allowed origins from environment variables
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['https://fleetsync-app.vercel.app', 'http://localhost:3000'];

const io = socketio(Server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  }
});

connectDB();

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/fleet', fleetRoutes);

app.get("/live-tracking", (req, res) => {
  res.send("Socket page");
});

// Health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log("New client connected:", socket.id);

  socket.on('disconnect', () => {
    console.log("Client disconnected:", socket.id);
  });

  // Example custom event
  socket.on('locationUpdate', (data) => {
    console.log("Location update received:", data);
    // You can broadcast this to others if needed:
    socket.broadcast.emit('locationUpdate', data);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
Server.listen(PORT, () => console.log(`Server running with Socket.IO on port ${PORT}`));