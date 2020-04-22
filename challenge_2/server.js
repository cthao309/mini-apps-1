// loading server script and node module dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const json2csv = require('./controllers/json2csv');

const app = express();
const PORT = 3000;

// enable middleware for processing data from client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(morgan('tiny'))

// enable middleware for serving static file, index.html
app.use(express.static(path.join(__dirname, '/client')));

// end point for post request
app.post('/json2csv', json2csv)

// end point for download request
app.get('/download/:fileName', (req, res) => {
  res.download(__dirname + `/samples/${req.params.fileName}.csv`);
});

// event listener on the application at 3000
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})

