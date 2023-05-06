let container = document.getElementById("container");
let display = document.getElementById("display");

// adding a keydown event to listener to the document
document.addEventListener("keydown", function (e) {
    display.style.color = "red";
    display.innerText = e.key + "is keydown";
});

// adding a keyup event to listener to the document
document.addEventListener("keyup", function (e) {
display.style.color = "green";
display.innerText = e.key + "is keyup";
});