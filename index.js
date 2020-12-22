let express = require('express');
let app = express();

app.get('/url', (req, res) => {
  res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
