const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// add express middleware
app.use(express.static(path.join(__dirname, '/public')));


app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:${PORT}`);
});


