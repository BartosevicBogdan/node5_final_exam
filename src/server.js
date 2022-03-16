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

const authorizationRoute = require('./Routes/authorizationRoutes');

app.use('', authorizationRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
