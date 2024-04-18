//* Now in this file create the connection between this Our REST-API and mongoDB Database

//TODO: Import the Mongoose module to set connection with MongoDB
const mongoose = require("mongoose");

//TODO: This will connect with database and display the message if db connection is established or not
mongoose
  .connect("mongodb://localhost:27017/FacultyREST")
  .then(() => {
    console.log("Successfully Connect To The MongoDB Database!");
  })
  .catch((err) => {
    console.log("Not Connected Successfully" + err);
  });
