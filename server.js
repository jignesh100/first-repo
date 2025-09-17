const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World from Cloud Run Jignesh Verulakar!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
