//! Import Module for performing operating system related operations
const os = require("os");

//? Getting System Architecture Information
const Arch = os.arch();
console.log(Arch);

//? How many memory free in your system
const freeMem = os.freemem();
console.log(freeMem); //* This will return in bytes
console.log(`${freeMem / 1024 / 1024 / 1024}`);

//? How many total memory free in your system
const totalMem = os.totalmem();
console.log(totalMem); //* This will return in bytes
console.log(`${totalMem / 1024 / 1024 / 1024}`);

//? To find the username of the computer
const hostName = os.hostname();
console.log(hostName);

//? To show the on which platform you are
const platForm = os.platform();
console.log(platForm);

//? To show the on which os you are
console.log(os.type());
