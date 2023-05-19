// List items array
var listItemArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "Backend Development",
    "Frontend Development",
    "Database Management",
    "API Integration",
  ];
  
  // Counter to keep track of the current list item
  var currentItemIndex = 0;
  
  // Function to add the next list item
  function addNextListItem() {
    // Get the <ul> element that contains the list items
    var list = document.getElementById("list-items");
  
    // Check if there are remaining items in the array
    if (currentItemIndex < listItemArray.length) {
      // Create a new <li> element
      var newItem = document.createElement("li");
      newItem.textContent = listItemArray[currentItemIndex];
  
      // Add the new <li> element to the <ul>
      list.appendChild(newItem);
  
      // Increment the counter
      currentItemIndex++;
    } else {
      // Display a message when all items have been added
      alert("All items have been added.");
    }
  }
  