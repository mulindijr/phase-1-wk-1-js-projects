function calculateNetSalary() {
    // Get user inputs for basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter your basic salary (Ksh):"));
    const benefits = parseFloat(prompt("Enter any benefits (Ksh) (if applicable):"));
  
    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter valid numbers.");
      return;
    }
  
    // Calculate gross salary (basic salary + benefits)
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE (tax) based on the provided PAYE rates
    let paye = 0;
    if (grossSalary <= 24000) {
      paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
      paye = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
      paye = 24000 * 0.10 + 8333 * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
      paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
      paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (grossSalary - 800000) * 0.35;
    }
  
    // Calculate NHIF Deductions based on the provided NHIF rates
    let nhifDeductions = 0;
    const nhifRates = [
      { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
      { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
      // Add more rate ranges as needed
    ];
  
    for (const rate of nhifRates) {
      if (grossSalary >= rate.minGrossPay && grossSalary <= rate.maxGrossPay) {
        nhifDeductions = rate.deduction;
        break;
      }
    }
  
    // Calculate NSSF Deductions based on the provided NSSF rates
    const nssfRate = 0.06; // 6% NSSF rate
    const nssfDeductions = Math.min(basicSalary * nssfRate, 18000); // NSSF Tier I limit is 6,000 Ksh
  
    // Calculate net salary (gross salary - PAYE - NHIF - NSSF)
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
  
    // Display the results
    console.log(`Gross Salary: ${grossSalary.toFixed(2)} Ksh`);
    console.log(`PAYE (Tax): ${paye.toFixed(2)} Ksh`);
    console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)} Ksh`);
    console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)} Ksh`);
    console.log(`Net Salary: ${netSalary.toFixed(2)} Ksh`);
  }
  
  // Call the function to calculate and display the results
  calculateNetSalary();
  