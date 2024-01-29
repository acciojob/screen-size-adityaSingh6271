// script.js

// Function to update size information
function updateSizeInfo() {
    // Get width and height of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Update the content of the <h1> tag with the size information
    document.getElementById('sizeInfo').innerHTML = `<h1>Width: ${windowWidth} Height: ${windowHeight}</h1>`;
}

// Initial call to set size information on page load
updateSizeInfo();

// Add event listener for the 'resize' event
window.addEventListener('resize', updateSizeInfo);
