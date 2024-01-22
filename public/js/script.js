window.onload = function() {
    // Example for changing themes based on time
    var hour = new Date().getHours();
    var body = document.body;

    if (hour > 18 || hour < 6) {
        body.classList.add("night-theme");
    } else {
        body.classList.add("day-theme");
    }

    // Add more JavaScript logic as needed
};
