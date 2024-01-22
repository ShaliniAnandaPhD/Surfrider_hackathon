const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Set the view engine to ejs for templating
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data and serve static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded Weatherbit API key and the app's name
const apiKey = '72bcab692ab1463298c2245e2b9f2f91'; // Keep your API key here
const appName = 'SkySight';

// Route for the homepage
app.get('/', async (req, res) => {
    // Default values for city and units, with basic validation
    const city = req.query.city ? req.query.city.trim() : 'San Francisco';
    const units = req.query.units === 'imperial' ? 'imperial' : 'metric';

    // Constructing URLs for current weather and forecast
    const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?city=${encodeURIComponent(city)}&units=${units}&key=${apiKey}`;
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${encodeURIComponent(city)}&units=${units}&key=${apiKey}&days=5`;

    try {
        // Fetching weather data using axios
        const currentWeatherResponse = await axios.get(currentWeatherUrl);
        const forecastResponse = await axios.get(forecastUrl);

        // Rendering the index.ejs view with fetched data
        res.render('index', {
            appName,
            city,
            units,
            current: currentWeatherResponse.data.data[0],
            forecast: forecastResponse.data.data,
            error: null
        });
    } catch (error) {
        // Enhanced error handling with detailed logging
        console.error('Error fetching weather data:', error.message);
        res.render('index', {
            appName,
            city,
            units,
            error: 'Error fetching weather data. Please try again.',
            current: null,
            forecast: null
        });
    }
});

// Example route for surfing character animation
app.get('/surf-animation', (req, res) => {
    // Implementation logic for surfing animation
    res.json({ message: "Surfing animation data goes here" });
});

// Example route for real-time notifications
app.post('/notify', (req, res) => {
    // Implementation logic for real-time notifications
    res.json({ message: "Notification data goes here" });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log(`${appName} running on port 3000`);
});

