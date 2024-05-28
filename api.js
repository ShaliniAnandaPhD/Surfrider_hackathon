// Function to fetch the current surf conditions from the API
function fetchSurfConditions() {
    // API endpoint for surf conditions (replace with the actual API endpoint)
    const apiUrl = 'https://api.example.com/surf-conditions';

    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the UI with the fetched data
            updateSurfConditions(data);
        })
        .catch(error => {
            console.error('Error fetching surf conditions:', error);
        });
}

// Function to update the surf conditions in the UI
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
