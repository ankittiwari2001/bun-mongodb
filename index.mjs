import express from "express";
import mongoose from 'mongoose';
import  router  from './src/routes/userRoutes.js';


const app = express();
const port = 3000;
app.use(express.json())

// Define the routes
app.use('/api/user', router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const MONGODB_URI = "mongodb://127.0.0.1:27017/mongoose-app";



// Create a custom logging function
const logConnectionStatus = (msg) => {
  console.log(`Mongoose: ${msg}`);
};


// Configure Mongoose to use the custom logging function
mongoose.set("debug", logConnectionStatus);


// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


    
// Start the Express server after MongoDB connection
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


