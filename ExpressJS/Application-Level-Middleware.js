//* Demonstration of the Application-Level Middleware
const express = require("express");
const app = express();

//? 1. app.use method: This function will be executed on the any type of request (GET, POST, PUT, DELETE)
app.use("/app/:id", (req, res, next) => {
  console.log("Request Type : " + req.method);
  res.end("Request Accepted");
  next();
});

//? 2. app.get method: GET HTTP Requests are handled by this middleware
//* This will only be called when the GET method is called
app.get("/api", (req, res, next) => {
  res.send("Request is from API with Get Method");
});

//? 3. app.post method: POST HTTP Requests are handled by this middleware
//* This will only be called when the POST method is used to make a call
app.post("/api", (req, res, next) => {
  res.send("Request is from API with Post Method");
});

//? 4. app.put method: PUT HTTP Requests are handled by this middleware
//* This will only be called when the PUT method is used to update data in server
app.put("/api", (req, res, next) => {
  res.send("Request is from API with Put Method");
});

//? 5. app.delete method: DELETE HTTP Requests are handled by this middleware
//* This will only be called when the DELETE method is used to delete data from server
app.delete("/api", (req, res, next) => {
  res.send("Request is from API with Delete Method");
});

//! Starting the Server and Listing
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
