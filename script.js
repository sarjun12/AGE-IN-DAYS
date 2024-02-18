function ageInDays() {
  var birthYear = prompt("which year you were born...my friend?");
  var agedays = (2023 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("you are " + agedays + " days old");
  h1.setAttribute("id", "agedays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1); }
