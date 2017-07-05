// 📺 Promisify Reading a File
// 1. Node’s fs.readFile takes a callback that runs after file read is complete.
// 2. Promisify it to instead return a promise.
const fs = require('fs');

function readFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      resolve(data.toString());
    })
  });
}

readFile('./index.html').then(fileContents => console.info(fileContents));
