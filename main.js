// Select all the link elements
const links = document.querySelectorAll('.links li a');

// Add a mouseover event listener to each link
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Apply the random color to the link's background
    link.style.backgroundColor = randomColor;
  });
  
  link.addEventListener('mouseout', () => {
    // Reset the background color when the mouse leaves the link
    link.style.backgroundColor = '';


    document.addEventListener("mousemove", function(event) {
      // Get the current mouse position
      var x = event.pageX;
      var y = event.pageY;
    
      // Calculate the RGB values based on the mouse position
      var red = Math.round((x / window.innerWidth) * 255);
      var green = Math.round((y / window.innerHeight) * 255);
      var blue = 100; // Set a constant value for blue (you can adjust this as desired)
    
      // Set the background color using RGB values
      document.documentElement.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    });
    
  });
});
