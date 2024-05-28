// Function to set up WebSocket for real-time notifications
function setupWebSocket() {
    // WebSocket endpoint
    const socketUrl = 'wss://example.com/realtime';

    // Create a new WebSocket
    const socket = new WebSocket(socketUrl);

    // Handle incoming messages
    socket.onmessage = function(event) {
        // Parse the incoming message
        const message = JSON.parse(event.data);

        // Display notification to the user
        displayNotification(message);

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

// Function to display notifications to the user
function displayNotification(message) {
    // Get the notification container element
    const notificationContainer = document.getElementById('notification-container');

    // Create a new notification element
    const notificationElement = document.createElement('div');
    notificationElement.className = 'notification';
    notificationElement.innerText = `New Update: ${message.update}`;

    // Append the notification element to the container
    notificationContainer.appendChild(notificationElement);

    // Automatically remove the notification after 5 seconds
    setTimeout(() => {
        notificationContainer.removeChild(notificationElement);
    }, 5000);
}

// Call the setupWebSocket function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupWebSocket);
