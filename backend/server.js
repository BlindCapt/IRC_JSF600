require("dotenv").config(); // Load environment variables from .env file
const express = require("express"); // Import express
const { createServer } = require("node:http"); // Import http module
const cors = require("cors"); // Import the cors middleware

// Express app
const app = express();
const server = createServer(app);
const mongoose = require("mongoose");

app.use(cors());

const IrcRoutes = require("./routes/irc");
const userRoutes = require("./routes/user");

// Middleware

// Parse JSON data
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});

// Routes
app.use("/chat/", IrcRoutes);
app.use("/user/", userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Lisen for requests
    server.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
