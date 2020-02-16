const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
var dayOfWeek = dayArray[today.getDay()];
var monthName = monthArray[today.getMonth()];
var currentDate = dayOfWeek + ", " + today.getDate() + " " + monthName + " " + (today.getYear() + 1900);
document.getElementById("currentDate").innerHTML = currentDate;


