// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    initMap();

    // Fetch and display the current surf conditions
    fetchSurfConditions();

    // Set up WebSocket for real-time notifications
    setupWebSocket();
});

// Initialize Google Map
function initMap() {
    // Map options
    const mapOptions = {
        zoom: 10,
        center: { lat: 34.0194, lng: -118.4912 } // Coordinates for Santa Monica, CA
    };

    // Create a new map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker at the center
    new google.maps.Marker({
        position: mapOptions.center,
        map: map
    });
}

// Fetch the current surf conditions from the API
function fetchSurfConditions() {
    // API endpoint for surf conditions
    const apiUrl = 'https://api.example.com/surf-conditions';

    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the UI with the fetched data
            updateSurfConditions(data);
        })
        .catch(error => {
            console.error('Error fetching surf conditions:', error);
        });
}

// Update the UI with the fetched surf conditions
function updateSurfConditions(data) {
    // Get the conditions element
    const conditionsElement = document.getElementById('conditions');

    // Clear any existing content
    conditionsElement.innerHTML = '';

    // Create new content based on the data
    const conditionsHtml = `
        <p>Wave Height: ${data.waveHeight} ft</p>
        <p>Water Temperature: ${data.waterTemp} °F</p>
        <p>Wind Speed: ${data.windSpeed} mph</p>
    `;

    // Update the conditions element with the new content
    conditionsElement.innerHTML = conditionsHtml;

    // Update the surf animation based on the conditions
    updateSurfAnimation(data.waveHeight);
}

// Update the surf animation based on the wave height
function updateSurfAnimation(waveHeight) {
    // Get the surf animation element
    const surfAnimationElement = document.getElementById('surf-animation');

    // Adjust the animation speed based on the wave height
    const animationSpeed = 1 + (waveHeight / 10);
    surfAnimationElement.style.animationDuration = `${animationSpeed}s`;
}

// Set up WebSocket for real-time notifications
function setupWebSocket() {
    // WebSocket endpoint
    const socketUrl = 'wss://example.com/realtime';

    // Create a new WebSocket
    const socket = new WebSocket(socketUrl);

    // Handle incoming messages
    socket.onmessage = function(event) {
        // Parse the incoming message
        const message = JSON.parse(event.data);

        // Update the UI with the new data
        updateSurfConditions(message);
    };

    // Handle WebSocket errors
    socket.onerror = function(error) {
        console.error('WebSocket error:', error);
    };

    // Handle WebSocket closure
    socket.onclose = function() {
        console.warn('WebSocket closed');
    };
}
