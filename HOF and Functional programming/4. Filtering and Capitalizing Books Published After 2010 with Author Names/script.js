// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

// Define the list of books
var books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2015 },
    { title: "Book 5", author: "author 5", year: 2003 }
  ];
  
  // Filter and capitalize the author names
  var filteredBooks = books.filter(function(book) {
    return book.year >= 2010;
  }).map(function(book) {
    book.author = book.author.toUpperCase();
    return book;
  });
  
  // Display the filtered and capitalized books
  console.log("Filtered Books:", filteredBooks);
  