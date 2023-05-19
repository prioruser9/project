// 4. Highest Marks
// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.

const marks = [75, 80, 85, 99, 95, 90];
let highestMarks = 0;
let highestMarksIndex = 0;

for (let i = 0; i < marks.length; i++) {
 highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
 highestMarksIndex = marks[i] === highestMarks ? i : highestMarksIndex;
} 

console.log(`The highest marks scored by any student is ${highestMarks} (Student ${highestMarksIndex + 1}).`);

