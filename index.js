function generatetable() {
  let number = parseInt(prompt("Enter a number for the multiplication table:"));

  // Validate number input
  if (isNaN(number)) {
    console.log(prompt("Invalid input. Please enter a valid number."));
    return;
  }

  // Ask user for table type
  let tableType = prompt(
    "Do you want a full table (1 to 10) or a partial table?\nEnter 'full' or 'partial':"
  ).toLowerCase();

  let start = 1;
  let end = 10;

  if (tableType === "partial") {
    start = parseInt(
      prompt("Enter the starting number for the partial table:")
    );
    end = parseInt(prompt("Enter the ending number for the partial table:"));

    if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start >= end) {
      console.log(prompt("invalid range. Please enter a valid"));

      start = 1;
      end = 10;
    }
  } else if (tableType !== "full") {
    console.log(
      prompt("Invalid table type. Please enter 'full' or 'partial'.")
    );
    return;
  }

 
    for (let i = start; i <= end; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
       
    }
    return;



  
}
generatetable();
