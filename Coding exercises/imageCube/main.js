// Initialize variables to track the rotation angles for the cube.
let angleX = 0; // Angle for rotation around the X-axis.
let angleY = 0; // Angle for rotation around the Y-axis.

// Select the HTML element with the class 'cube' and store it in the 'cube' variable.
const cube = document.querySelector('.cube');

// Add an event listener to the document to listen for keydown events.
document.addEventListener('keydown', (event) => {
  // Use a switch statement to check which arrow key was pressed.
  switch (event.key) {
    case 'ArrowUp':
      // Decrease the angle for rotation around the X-axis by 90 degrees (upward).
      angleX -= 90;
      break;
    case 'ArrowDown':
      // Increase the angle for rotation around the X-axis by 90 degrees (downward).
      angleX += 90;
      break;
    case 'ArrowLeft':
      // Decrease the angle for rotation around the Y-axis by 90 degrees (leftward).
      angleY -= 90;
      break;
    case 'ArrowRight':
      // Increase the angle for rotation around the Y-axis by 90 degrees (rightward).
      angleY += 90;
      break;
  }

  // Apply the rotation angles to the cube's transform property to update its rotation.
  cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});
