// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.



function calculateBill(dishCosts, numPeople) {
    const totalBill = dishCosts.reduce((acc, cost) => acc + cost, 0);
    const billPerPerson = totalBill / numPeople;
    return { totalBill, billPerPerson };
  }

  const dishCosts = [10, 15, 20, 25];
const numPeople = 4;
const bill = calculateBill(dishCosts, numPeople);

console.log(bill);