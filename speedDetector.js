function calculateDemeritPoints(speed) {
    // Define the speed limit and the number of km per demerit point
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    // Check if the car's speed is within the speed limit
    if (speed < speedLimit) {
      console.log("Ok"); // If within limit, print "Ok"
    } else {
      // Calculate demerit points for exceeding the speed limit
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      
      // Check if demerit points exceed the suspension limit
      if (demeritPoints >= 12) {
        console.log("License suspended"); // If 12 or more points, print "License suspended"
      } else {
        console.log(`Points: ${demeritPoints}`); // Print the number of demerit points
      }
    }
  }

  // Get the car's speed as user input
  const carSpeed = parseFloat(prompt("Enter the car's speed (km/h):"));
  
  // Check if the input is a valid number
  if (!isNaN(carSpeed)) {
    calculateDemeritPoints(carSpeed); // Calculate and display demerit points
  } else {
    console.log("Invalid input. Please enter a valid number."); // Print an error message for invalid input
}
  