// Utility function to format date and time
function formatDateTime(datetime) {
    const date = new Date(datetime);
    const options = {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    };
    return date.toLocaleDateString(undefined, options);
}

// Utility function to handle API errors
function handleApiError(error) {
    console.error('API Error:', error);
    // Display error notification to the user
    displayNotification({ update: `Error: ${error.message}` });
}

// Utility function to display notifications
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

// Utility function to debounce events
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Utility function to throttle events
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
