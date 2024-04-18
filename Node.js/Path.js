//* The Exercise of Path Module of Node.js
//* The path module provides the utilities for working with file and  directory paths.
//? Perform some of the built in methods of the path module
const path = require("path");

//? 1. normalize : It will normalize the given path, resolving '..' and '.' segments.
console.log(path.normalize("/foo/abc/..")); // Output: \foo

//? 2. join :  It will join two path and normalize it.
console.log(path.join("/foo", "bar", "abc")); // Output: \foo (This is the original path)\bar (Path-1)\abc (Path-2) join with this original path

//? 3. resolve : It will resolve a sequence of paths into an absolute path
console.log(path.resolve("/foo", "bar")); // Output: c:\foo\bar

//? 4. relative: It returns the relative path from path1 to path2
console.log(path.relative("/foo", "bar")); // Output: ..\Users\Devendra\Desktop\DU\Web Technology - 2\WT Practices\bar

//? 5. dirname: It will return the directory name.
console.log(path.dirname("/foo/abc.txt")); // Output: /foo

//? 6. basename: It will return the name of the file.
console.log(path.basename("/foo/abc.txt")); // Output: /abc.txt

//? 7. extname: It will return the extension of the file.
console.log(path.extname("abc.txt")); // Output: txt
