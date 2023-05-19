// 8. InverteW right-angleW triangle pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.

// Inverted right-angled pattern:
// ******
// *****
// ****
// ***
// **
// *
// If i=6

let i = 6; // Replace 6 with any other positive integer
for(let row = i; row >= 1; row--){
  let pattern = '';
  for(let col = 1; col <= row; col++){
    pattern += '*';
  }
  console.log(pattern);
}
