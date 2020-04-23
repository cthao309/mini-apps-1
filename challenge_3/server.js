const express = require('express');
const path = require('path');

const db = require('./db/db.js')

const app = express();
const PORT = 3000;

// add express middleware
app.use(express.static(path.join(__dirname, '/public')));

// root end-point
app.get('/', (req, res) => {
  res.send(path.join(__dirname, '/../public/index.html'));
});

// post request
app.post('/', (req, res) => {
  console.log('POSTING (data) => ', req.body)
})


app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:${PORT}`);
});


