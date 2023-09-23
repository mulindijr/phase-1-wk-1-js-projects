function generateGrade() {

    //Get the user's input for student marks
    const input = prompt("Enter the student's marks (0-100):");

    // Parse the input as a floating-point number
    const marks = parseFloat(input);
    
    // Check if the input is a valid number within the range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      let grade;
        
      if (marks > 79) {
        grade = 'A';
      } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
      } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
      } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
      } else {
        grade = 'E';
      }
  
      alert(`The student's grade is: ${grade}`);
    } else {
      alert("Invalid input. Marks should be between 0 and 100.");
    }
}

// Call the function to calculate and display the grade
generateGrade();
  
