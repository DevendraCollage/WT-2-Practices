//* Using Mongoose We Define the Schema of the MongoDB Database.

//TODO: This is require for create the mongoDB Schema
const mongoose = require("mongoose");

//TODO: This will create the schema of the database
const schema = mongoose.Schema({
  FacultyID: Number,
  FacultyNam: String,
  FacultyInitial: String,
});

//TODO: This will export the schema and set the name of the schema in the database
module.exports = mongoose.model("RestFaculty", schema);
