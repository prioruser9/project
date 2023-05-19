// 3. Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria"

// . If color1 is "red" and color2 is "blue" or vice versa, print "purple".
// . If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
// . If color1 is "blue" and `color2" is "yellow" or vice versa, print "green".
// . If any other combination of colors is input, the program should print "Invalid color combination".

function mixColors(color1, color2) {
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            console.log("purple");
            break;
          case "yellow":
            console.log("orange");
            break;
          default:
            console.log("Invalid color combination");
        }
        break;
      case "blue":
        switch (color2) {
          case "red":
            console.log("purple");
            break;
          case "yellow":
            console.log("green");
            break;
          default:
            console.log("Invalid color combination");
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
            console.log("orange");
            break;
          case "blue":
            console.log("green");
            break;
          default:
            console.log("Invalid color combination");
        }
        break;
      default:
        console.log("Invalid color combination");
    }
  }
  
  // Example usage:
  mixColors("red", "blue"); 
  mixColors("red", "yellow"); 
  mixColors("blue", "yellow"); 
  mixColors("red", "green"); 
  
