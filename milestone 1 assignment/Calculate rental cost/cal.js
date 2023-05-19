// 12. Calculate rental cost
// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
// of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
// Thd total cost would be the rental cost multiplied by the number of days rented.


// The rental costs are
// . Economy = Rs. 4000 /- per day.
// . Midsize = Rs. 10,000 /- per day.
// . Luxury = Rs. 20,000 /- per day.


function calculateRentalCost(numDays, carType) {
    let rentalCost;
    
    if (carType === 'Economy') {
      rentalCost = 4000;
    } else if (carType === 'Midsize') {
      rentalCost = 10000;
    } else if (carType === 'Luxury') {
      rentalCost = 20000;
    } else {
      return "Invalid car type!";
    }
    
    const totalCost = rentalCost * numDays;
    return totalCost;
  }


  const numDays = 7;
  const carType = 'Midsize';
  const rentalCost = calculateRentalCost(numDays, carType);
  console.log(`The total rental cost for a ${carType} car for ${numDays} days is Rs. ${rentalCost}/-`);
