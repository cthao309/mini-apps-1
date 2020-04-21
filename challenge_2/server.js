// loading server script and node module dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const json2csv = require('./controllers/json2csv');

const app = express();
const PORT = 3000;

// enable middleware for processing data from client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// enable middleware for serving static file, index.html
app.use(express.static(path.join(__dirname, '/client')));

// end point for post request
app.post('/json2csv', (req, res) => {
  console.log('json2csv end-point')
  res.send('json2csv end-point')
})

// event listener on the application at 3000
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})

