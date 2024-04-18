//* Explanation about the Child-Process in Node.js
const { exec } = require("child_process");

//? This will open the new tab in edge and open the you-tube
url = "https://www.youtube.com/";
cmdCommand = `start chrome /new-tab ${url}`;
exec(cmdCommand);

//? This is another program of the child process
exec("ping google.com", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
});
