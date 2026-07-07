const addToEnd = document.getElementById("addToEnd-Btn");
const addToStart = document.getElementById("addToStart-Btn");
const removeFirstMovie = document.getElementById("removeFirstMovie");
const removeLastMovie = document.getElementById("removeLastMovie");
const movieInput = document.getElementById("movieInput");
const display = document.getElementById("displayArea");

const movieArr = [];

addToEnd.onclick = () => {
  if (movieInput.value === "") {
    return;
  }
  movieArr.push(movieInput.value);
  display.textContent = movieArr.join(", ");
  movieInput.value = "";
};

addToStart.onclick = () => {
  if (movieInput.value === "") {
    return;
  }
  movieArr.unshift(movieInput.value);
  display.textContent = movieArr.join(", ");
  movieInput.value = "";
};

function updateDisplay() {
  if (movieArr.length === 0) {
    display.textContent = "Playlist is empty, wanna add some?";
  } else {
    display.textContent = movieArr.join(", ");
  }
}

removeFirstMovie.onclick = () => {
  movieArr.shift();
  updateDisplay();
};

removeLastMovie.onclick = () => {
  movieArr.pop();
  updateDisplay();
};
updateDisplay();

const randomMovie = document.getElementById("randomMovie");
const randomPick = document.getElementById("randomResult");

randomMovie.onclick = () => {
  if (movieArr.length === 0) {
    return (display.textContent = "Playlist is empty");
  }
  let pickRandom = Math.floor(Math.random() * movieArr.length);
  console.log(randomPick);
  randomPick.textContent = movieArr[pickRandom];
};

const clear = document.getElementById("clear");

clear.onclick = () => {
  movieArr.length = 0;
  updateDisplay();
};

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");
const fieldset = document.getElementById("fieldset");

searchBtn.onclick = () => {
  let searchRes = movieArr.includes(searchBar.value);
  if (searchBar.value === "") {
    return;
  } else if (searchRes === true) {
    searchResult.textContent = `Found: ${searchBar.value}`;
    fieldset.style.display = "block";
  } else if (searchRes === false) {
    searchResult.textContent = `Not found: ${searchBar.value}`;
  }
};
