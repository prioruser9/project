// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

const customer = {
    name: "John Doe",
    balance: 1000,
  };
  
  const deposit = (amount) => {
    customer.balance += amount;
  };
  
  const withdraw = (amount) => {
    if (customer.balance >= amount) {
      customer.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  };

  console.log(customer.balance); 

  deposit(500);
  console.log(customer.balance); 
  
  withdraw(200);
  console.log(customer.balance); 
  
  withdraw(1500);