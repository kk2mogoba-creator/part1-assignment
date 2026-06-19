document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

const email =
document.querySelector("input[type='email']").value;

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
e.preventDefault();
alert("Please enter a valid email address");
return;
}

alert("Form submitted successfully!");

});

});