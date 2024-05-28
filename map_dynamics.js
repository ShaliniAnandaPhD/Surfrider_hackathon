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
    const marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: 'Santa Monica Beach'
    });

    // Add more markers as needed
    addMarkers(map);
}

// Function to add markers to the map
function addMarkers(map) {
    // Array of marker data
    const markers = [
        { lat: 34.0194, lng: -118.4912, title: 'Santa Monica Beach' },
        { lat: 34.0259, lng: -118.7798, title: 'Malibu Beach' },
        { lat: 33.9850, lng: -118.4695, title: 'Venice Beach' }
    ];

    // Loop through markers and add to map
    markers.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}

// Function to customize the map appearance
function customizeMap(map) {
    // Define custom styles for the map
    const customStyles = [
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#blue' }]
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#green' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#grey' }]
        }
    ];

    // Apply custom styles to the map
    map.setOptions({ styles: customStyles });
}

// Call the initMap function when the window loads
window.onload = initMap;
