/*
Write a Node.js HTTP server application that takes in a score from the user and
then displays a grade on the screen (A, B, C, D or F).
For example, the user can enter a URL such as http://localhost:8080/?score=100

The user should then see an <h1> element on the screen with the letter A in it.
*/


const http = require('http');
const url  = require('url');

const server = http.createServer(function(request, response){
  // This line will read the GET parameters that we receive as part of the URL
  // it will give us back a Javascript Object with key/value pairs of those
  // params. For instance, if the user enters: http://localhost:5000/?name=john&age=10
  // then params will be: { name: 'john', age: '10' }
  // note that values will always come as strings even if they are numerical
  const params = url.parse(request.url, true).query;
  // writeHead with help us set the header for the HTTP response
  // 200 is HTTP response code for `success`
  // we set the `Content-Type` header to `text/html` to let the client know
  // that we are sending back and html page.
  response.writeHead(200, { 'Content-Type': 'text/html' });

  let score = `${params.score}`;


  function grade (s) {

    let result = '';

    if (score >= 90 && score <= 100) {
      result = 'A';
    }
    else if (score < 90 && score >= 80) {
      result = 'B';

    }
    else if (score < 80 && score >= 70) {
      result = 'C';
    }
    else if (score < 70 && score >= 60) {
      result = 'D';
    }
    else {
      result = 'F';
    }
    return result;
  }

  response.write(`
                    <!DOCTYPE html>
                      <html>
                      <head>
                        <title>My first web server</title>
                      </head>
                      <body>
                        <h1>Your grade is: ${grade(score)}!</h1>
                        <h1>Test: ${score}</h1>
                      </body>
                      </html>

                `);
  response.end();
});

server.listen(5000);
console.log('HTTP server listening on port 5000');
