const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

const filter =
searchInput.value.toLowerCase();

const events =
document.querySelectorAll(".event");

events.forEach(event => {

const text =
event.textContent.toLowerCase();

event.style.display =
text.includes(filter)
? "block"
: "none";

});

});