// 5. Capitalize
// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changes.

function capitalizeName(name) {
    return name.charAt(0).toLowerCase() === name.charAt(0)
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name;
  }


console.log(capitalizeName("deepak")); 
console.log(capitalizeName("jitesh"));
console.log(capitalizeName("akash"));