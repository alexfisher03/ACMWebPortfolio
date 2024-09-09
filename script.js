// This event is fired when the initial HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', function () {
    // This line assigns the body element of the HTML document to the variable `body`. It allows us to access and manipulate the body element later in the code.
    const body = document.body; 
    // This line assigns the element with the ID "themeToggle" to the variable `themeToggle`. It allows us to access and manipulate the theme toggle element later in the code.
    const themeToggle = document.getElementById('themeToggle');

    // Function to toggle the theme of the website
    function toggleTheme() {
        // If the class is present, it will be removed; if it's not present, it will be added. This allows us to switch between light and dark themes.
        body.classList.toggle('dark-theme');

        // Update the text inside the website based on the current theme
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light'; // Show 'Light' if in dark mode
        } else {
            themeToggle.textContent = 'Dark'; // Show 'Dark' if in light mode
        }
    }

    // This line adds an event listener to the theme toggle element, which listens for the "click" event. When the toggle is clicked, it will call the `toggleTheme` function.
    themeToggle.addEventListener('click', toggleTheme); // Trigger theme toggle on click
});