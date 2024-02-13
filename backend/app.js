require("dotenv").config(); // Load environment variables from .env file

const express = require("express"); // Import express
const mongoose = require("mongoose"); // Import mongoose
const cors = require("cors"); // Import cors middleware
const { Server } = require("socket.io"); // Import socket.io
const { createServer } = require("node:http"); // Import http module

// Import routes
const IrcRoutes = require("./routes/irc.js");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());
io.use(cors()); // Use cors middleware to allow all origins

// Socket.io
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // Broadcast the message to all connected clients
  });
});

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URL);

// Gestion des événements de connexion
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Erreur de connexion à la base de données :")
);
db.once("open", () => {
  console.log("Connecté à la base de données MongoDB locale");
});

// Routes
app.use("/chat/", IrcRoutes);

// Parse JSON data
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});
