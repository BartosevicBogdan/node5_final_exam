require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.serverPORT || 5000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('<h1>Respond to test request endpoint</h1>');
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
