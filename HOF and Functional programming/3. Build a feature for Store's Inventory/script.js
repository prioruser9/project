// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

// Define the store's item prices in USD
var itemPricesInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30,
    "item4": 40
  };
  
  // Define the exchange rate
  var exchangeRate = 80;
  
  // Use the map function to convert prices to Rupees
  var itemPricesInRupees = Object.entries(itemPricesInUSD).map(function([itemName, priceInUSD]) {
    var priceInRupees = priceInUSD * exchangeRate;
    return [itemName, priceInRupees];
  });
  
  // Convert the array of key-value pairs to an object
  var itemPricesInRupeesObj = Object.fromEntries(itemPricesInRupees);
  
  // Display the converted prices
  console.log("Item Prices in Rupees:", itemPricesInRupeesObj);
  