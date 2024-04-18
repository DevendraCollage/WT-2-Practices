//* Demonstration of the Router-Level Middleware
const express = require("express");
const app = express();
const router = express.Router();

//? 1. app.use method: This function will be executed on the any type of request (GET, POST, PUT, DELETE)
router.use("/app/:id", (req, res, next) => {
  console.log("Request Type : " + req.method);
  res.end("Request Accepted With Router-Level Middleware!");
  next();
});

//? 2. app.get method: GET HTTP Requests are handled by this middleware
//* This will only be called when the GET method is called
router.get("/api", (req, res, next) => {
  res.send("Request is from API with Get Method of the Router Middleware!");
});

//? 3. app.post method: POST HTTP Requests are handled by this middleware
//* This will only be called when the POST method is used to make a call
router.post("/api", (req, res, next) => {
  res.send("Request is from API with Post Method of the Router Middleware!");
});

//? 4. app.put method: PUT HTTP Requests are handled by this middleware
//* This will only be called when the PUT method is used to update data in server
router.put("/api", (req, res, next) => {
  res.send("Request is from API with Put Method of the Router Middleware!");
});

//? 5. app.delete method: DELETE HTTP Requests are handled by this middleware
//* This will only be called when the DELETE method is used to delete data from server
router.delete("/api", (req, res, next) => {
  res.send("Request is from API with Delete Method of the Router Middleware!");
});

//! Starting the Server and Listing
app.use(router);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
