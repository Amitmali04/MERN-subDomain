const http = require('http');
// Create a server
// const server = http.createServer((req, res) => {
//   // Parse the 'Host' header to extract the subdomain
//   const host = req.headers.host || '';
// //   res.end(host,"Host name");
//   const subdomain = host.split('.')[0];


//   // Define routes based on subdomains
//   if (subdomain === subdomain) {
//     // Handle requests for the 'sub' subdomain
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // res.end('Welcome to the subdomain!');
//     res.end(`${host} Host name ${subdomain}  Welcome to the subdomain!`);
//   } else {
//     // Handle requests for other subdomains or the main domain
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Welcome to the main domain!');
    
//   }
// });

// Define the server's port
const port = 9000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});