//* In this we will define our routes and perform all the methods of the REST-API
//* REST-API :-> Representational State Transfer - Application Programming Interface

//! Import Require Modules
const express = require("express");
const app = express();
require("../db/conn"); // This is out connection file
const facultySchema = require("../model/schema"); // This our API schema file

//* Define Port variable
const port = process.env.PORT || 3000;

//* Middleware to parse JSON bodies
app.use(express.json());

//! 1. Get method for testing the REST_API
app.get("/", async (req, res) => {
  res.send("Successfully connection Established! and Hello From the Server!");
});

//! 2. Post method to enter the data in the database
app.post("/fac", async (req, res) => {
  try {
    const newData = await facultySchema.create(req.body);
    res.status(200).json(newData);
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
});

//! 3. Get method to get the All the data (GetByAll)
app.get("/fac", async (req, res) => {
  await facultySchema.find().then((data) => {
    res.json(data);
  });
});

//! 4. Get method to get the Data by id (GetById)
app.get("/fac/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findFacById = await facultySchema.findOne({ FacultyID: id });
    if (!findFacById) {
      return res.json({ message: "Faculty Not Found" });
    }
    res.send(findFacById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//! 5. patch method to update the data
app.patch("/fac/:id", async (req, res) => {
  const result = await facultySchema.findOneAndUpdate(
    {
      FacultyID: req.params.id,
    },
    body
  );
  res.send(result);
});

//! 6. delete method to delete the data from the database
app.delete("/fac/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findFacById = await facultySchema.findOneAndDelete({ FacultyID: id });
    if (!findFacById) {
      return res.json({ message: "Faculty Not Found" });
    }
    res.send(findFacById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log("Server Started on 3000 Port!");
});
