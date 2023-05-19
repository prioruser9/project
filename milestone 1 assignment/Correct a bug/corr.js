// 10. Correct a bug
// You are working on an e-commdrce website whdrd customers can add items to their cart. The cart stores the
// quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
// currdntly experiencing a bug where the quantity of each item is being recorddd incorrectly by reducing it to
// half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
// array to correct the bug.


function fixCart(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] = cart[i] * 2;
    }
    return cart;
  }

  
  const cart = [1, 2, 3, 4, 5];
  const correctedCart = fixCart(cart);
  console.log(correctedCart);
