document.addEventListener("DOMContentLoaded", function () {
    const spinnerContainer = document.getElementById("spinner-container");
    const spinnerImg = document.getElementById("spinner-img");
    const spinnerText = document.getElementById("spinner-text");
    const beginButton = document.getElementById("beginButton");
    const modal = document.getElementById("myModal");
    const backgroundMusic = document.getElementById("backgroundMusic");

    spinnerContainer.style.display = "none"

    // List of Items
    let itemsList = [
      "Graphic Design",
      "Create AI Art",
      "Create Go Project",
      "JavaScript Project",
      "Create Home Server",
      "Play Chess",
      "Play Hitman III",
      "Play Metalcore",
      "Research a Topic",
      "Play a Game of Go",
      "Write an Article",
      "Free Spin"
    ];
  
     // Spinner configuration
  const numberOfSlices = itemsList.length;
  const rotationPerItem = 360 / numberOfSlices;

  let totalRotation = 0; // Variable to keep track of the total rotation angle
  let currentRotation = 0; // Variable to keep track of the current rotation angle

  // Function to update the spinner text
  function updateSpinnerText() {
    const currentItemIndex = Math.floor((currentRotation % 360) / rotationPerItem);
    const currentItem = itemsList[currentItemIndex];
    spinnerText.textContent = currentItem;
  }

  // Function to rotate the spinner randomly for a few seconds
  function rotateSpinner() {
    const spins = 5; // Number of spins (adjust as needed)
    const randomSpeed = Math.random() * 100 + 50; // Random speed between 50 and 150 degrees per second
    const randomDuration = Math.random() * 2000 + 3000; // Random duration between 3 and 5 seconds

    // Calculate the total rotation angle for consecutive spins
    totalRotation = currentRotation + spins * 360 + Math.random() * 360;

    spinnerImg.style.transition = `transform ${randomDuration}ms cubic-bezier(0.355, 0.035, 0.000, 1.005)`;
    spinnerImg.style.transform = `rotate(${totalRotation}deg)`;

    // Update the current rotation angle for the next click
    currentRotation = totalRotation;

    // Reset the transition and set the final rotation state after the animation completes
    setTimeout(() => {
      spinnerImg.style.transition = "none";
      updateSpinnerText();
    }, randomDuration);
  }

  // Function to start the background music
  function playBackgroundMusic() {
    backgroundMusic.play();
  }

  // Initial spinner text update
//   updateSpinnerText();

  // Add click event listener to the spinner to trigger the rotation
  spinnerContainer.addEventListener("click", () => {
    rotateSpinner();
  });

  // Add click event listener to the "Begin" button to start the background music
  beginButton.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
    spinnerContainer.style.display = "block"
    playBackgroundMusic();
  });

  // Show the modal when the page loads
  modal.style.display = "block";
});