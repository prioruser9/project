// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.

// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.

// Define the input LinkedIn profile URLs
var profileURLs = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-doe",
    "https://www.linkedin.com/in/mary_smith",
    "https://www.linkedin.com/in/sam.123",
    "https://www.linkedin.com/in/username_longer_than_thirty_characters",
    "https://www.linkedin.com/in/_user",
    "https://www.linkedin.com/in/user_",
    "https://www.linkedin.com/in/user+name",
    "https://www.linkedin.com/in/user@name"
  ];
  
  // Define the regex pattern
  var regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
  // Test and print the matching result for each profile URL
  profileURLs.forEach(function(url) {
    var isMatch = regex.test(url);
    var message = isMatch ? "Valid LinkedIn profile URL" : "Invalid LinkedIn profile URL";
    console.log(url + " - " + message);
  });
  