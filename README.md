# Surfrider_hackathon

Surf Rider is a web application designed to provide surfers with real-time surf conditions, including swell, wind data, and interactive maps. It leverages the power of Node.js, Express, and the Google Maps API to deliver a user-friendly experience for surf enthusiasts.

## Features

- Real-time surf condition data.
- Interactive Google Maps integration.
- Responsive design for an optimal experience on all devices.
- Surfing character animations reacting to live wave conditions.

## Getting Started

These instructions will help you set up a copy of SurfSpotter on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- [Node.js](https://nodejs.org/en/download/)
- npm (comes with Node.js)
- A Google Maps API key. [Get a Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)

### Installing

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/SurfSpotter.git
   cd SurfSpotter
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory.
   - Add your Google Maps API key:
     ```
     GOOGLE_MAPS_API_KEY=your_api_key
     ```

4. **Start the Application**
   ```bash
   node app.js
   ```
   Navigate to `http://localhost:3000` in your web browser to view the app.

## Built With

- [Node.js](https://nodejs.org/) - The web framework used
- [Express.js](https://expressjs.com/) - Node.js web application framework
- [EJS](https://ejs.co/) - Templating language
- [Google Maps API](https://developers.google.com/maps) - Used for map integration
