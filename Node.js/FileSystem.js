//* The Exercise of FileSystem module of Node.js
//* The fs module of is working with the file system in node.js, it provides an asynchronous API to interacting with the filesystem
//? Perform some of the built in method of the fs (File System) module
const fs = require("fs");

//? 1. Exist :  fs.exist() is used for to check the given path is exist of not.
//! But this is now Deprecated
// fs.existsSync("./demo.txt", (exist) => {
//   console.log(exist);
// });

//TODO: But You can use this method
fs.access("./demo.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File does not exist");
  } else {
    console.log("File exists");
  }
});

//? 2. stat() : fs.stat() is used to get the information about the file or metadata.
fs.stat("./demo.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//? 3. Synchronous File reading.
const dataSync = fs.readFileSync("./demo.txt");
console.log(dataSync.toString());

//? 4. Asynchronous File reading.
const dataAsync = fs.readFile("./demo.txt");
console.log(dataAsync.toString());

//? 5. Delete a file - This method will delete the file
fs.unlink("./demo.txt", (err) => {
  if (err) throw err;
  console.log("File will be deleted");
});

//? 6. Rename the file - This method will rename the file
fs.rename("./demo.txt", "programmer.txt", (err) => {
  if (err) throw err;
  console.log("File will be renamed");
});
