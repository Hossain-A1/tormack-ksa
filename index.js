const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const deviceRoutes = require("./routes/device");

// express app
const app = express();

const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;
// middleware
app.use(cors({ credentials: true }));
app.use(express.json());

// toutes
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello ksa" });
});
app.use("/api/auth/user", userRoutes);
app.use("/api/data/device", deviceRoutes);

// listing express app and connected mongoDB
mongoose.connect(uri, { useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`app listen on port ${port}`);
  });
});
