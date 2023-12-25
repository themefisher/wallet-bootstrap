const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL pool configuration
const pool = new Pool({
  connectionString: 'postgresql://retool:9qEc1DQmBjOv@ep-long-surf-82660582.us-west-2.retooldb.com/retool?sslmode=require'
});

// Define routes
app.post('/subscribe', async (req, res) => {
  const { name, email, interest } = req.body;
  try {
    const result = await pool.query('INSERT INTO subscribers (name, email, interest) VALUES ($1, $2, $3) RETURNING *', [name, email, interest]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
