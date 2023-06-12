// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

// Define the input URLs
var urls = [
    "http://www.example.com",
    "https://www.example.com",
    "http://123example.com",
    "https://example.com",
    "ftp://www.example.com",
    "http://example",
    "https://example123",
    "http://www.example.",
    "https://example"
  ];
  
  // Define the regex pattern
  var regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+.[a-zA-Z]+$/;
  
  // Test and print the matching result for each URL
  urls.forEach(function(url) {
    var isMatch = regex.test(url);
    var message = isMatch ? "Valid URL" : "Invalid URL";
    console.log(url + " - " + message);
  });
  