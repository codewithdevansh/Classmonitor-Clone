const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors()); // Allow frontend to access backend
app.use('/public', express.static('public')); // Serve static files

app.get('/api/images', (req, res) => {
  const images = [
    'http://10.0.2.2:5000/public/logo.png',
    'http://10.0.2.2:5000/public/header1.png',
    'http://10.0.2.2:5000/public/header2.png',
  ];
  res.json({images});
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
