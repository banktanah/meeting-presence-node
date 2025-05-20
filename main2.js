// require('dotenv').config();
// const axios = require("axios");

// // var http = require("http");

// // http.createServer(function (request, response) {
// //    // Send the HTTP header
// //    // HTTP Status: 200 : OK
// //    // Content Type: text/plain
// //    response.writeHead(200, {'Content-Type': 'text/plain'});

// //    // Send the response body as "Hello World"
// //    response.end('Hello World\n');
// // }).listen(8081);

// const port = process.env.PORT || 8081;
// app.listen(port, () => {
//   console.log(`Server running at http://127.0.0.1:${port}/`);
// });

// // Console will print the message
// console.log("Server running at http://127.0.0.1:8081/");

require('dotenv').config(); // Load env variables
const app = require('./api/index'); // Import the Express app
const port = process.env.PORT || 8081;

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});