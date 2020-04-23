const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// enable express middleware to serve static file
app.use(express.static(path.join(__dirname, './client/dist')))

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

