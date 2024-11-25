const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = 4001;

// Set the default base URL for Axios
axios.defaults.baseURL = process.env.GOOGLE_MAPS_API_URL;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Address Autocomplete Endpoint
app.get('/api/address/:address', async (req, res) => {
  try {
    const { address } = req.params;

    if (address === 'null') {
      return res.status(200).json('');
    }

    const response = await axios.get(
      `place/autocomplete/json?input=${encodeURIComponent(address)}&types=address&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );

    res.status(200).json(response.data.predictions);
  } catch (err) {
    console.error('Error fetching address predictions:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Distance Matrix Endpoint
app.get('/api/distance/:pickup/:destination', async (req, res) => {
  try {
    const { pickup, destination } = req.params;

    const response = await axios.get(
      `distancematrix/json?origins=${encodeURIComponent(pickup)}&destinations=${encodeURIComponent(destination)}&units=imperial&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.error('Error fetching distance matrix:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
