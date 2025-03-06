const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Test the database connection
pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Successfully connected to database!', result.rows[0].now);
    }
});

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies

// API Endpoints

/**
 * GET /api/services
 * Fetches all services from the 'services' table.
 * Returns a JSON array of services.
 */
app.get('/api/services', async (req, res) => {
    try {
        // Input validation (example)
        const { limit = 10, offset = 0 } = req.query;
        if (isNaN(limit) || isNaN(offset)) {
            return res.status(400).json({ error: 'Invalid limit or offset parameters' });
        }

        const result = await pool.query('SELECT * FROM services LIMIT $1 OFFSET $2', [limit, offset]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching services:', error);
        if (error.code === '22P02') { // Invalid input syntax for type integer
            res.status(400).json({ error: 'Invalid input parameters' });
        } else {
            res.status(500).json({ error: 'Failed to fetch services' });
        }
    }
});

/**
 * GET /api/mulching
 * Fetches all mulching services from the 'mulching' table.
 * Returns a JSON array of mulching services.
 */
app.get('/api/mulching', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM mulching');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching mulching services:', error);
        res.status(500).json({ error: 'Failed to fetch mulching services' });
    }
});

/**
 * GET /api/moving
 * Fetches all moving services from the 'moving' table.
 * Returns a JSON array of moving services.
 */
app.get('/api/moving', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM moving');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching moving services:', error);
        res.status(500).json({ error: 'Failed to fetch moving services' });
    }
});

/**
 * GET /api/handy_services
 * Fetches all handy services from the 'handy_services' table.
 * Returns a JSON array of handy services.
 */
app.get('/api/handy_services', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM handy_services');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching handy services:', error);
        res.status(500).json({ error: 'Failed to fetch handy services' });
    }
});

// Serve static assets (e.g., your React build)
app.use(express.static(path.join(__dirname, '../dist'))); // Adjust the path if needed

// Catch-all route to serve index.html for React Router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html')); // Adjust the path if needed
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});