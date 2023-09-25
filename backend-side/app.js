
const express = require('express');

const app = express();

const PORT = 9000;

function loggerMiddleware(req, res, next) {

    // Parse the 'Host' header to extract the subdomain
    const Host = req.headers.host || '';
    const subDomain = Host.split('.')[0]



    console.log(`Host name ${Host}`);
    console.log(`Host name ${Host.split('.')[0]}`);
    next(); // Call next to pass control to the next middleware or route handler.
  }


  // Apply the loggerMiddleware globally
app.use(loggerMiddleware);

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, World!');
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
