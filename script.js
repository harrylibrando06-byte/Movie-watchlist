console.log(document.getElementById("displayArea"));
const addToEnd = document.getElementById("addToEnd-Btn");
const movieInput = document.getElementById("movieInput");
const display = document.getElementById("displayArea");

const movieArr = [];

addToEnd.onclick = function () {
  movieArr.push(movieInput.value);
  display.textContent = movieArr.join(", ");
  movieInput.value = "";
};
