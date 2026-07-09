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
  updateDisplay();
  movieInput.value = "";
};

addToStart.onclick = () => {
  if (movieInput.value === "") {
    return;
  }
  movieArr.unshift(movieInput.value);
  updateDisplay();
  movieInput.value = "";
};

function updateDisplay() {
  if (movieArr.length === 0) {
    return (display.textContent = "Playlist is empty, wanna add some?");
  }

  let html = "";

  for (let i = 0; i < movieArr.length; i++) {
    html += `<div class="movie"><input type="checkbox">${movieArr[i]}</div> `;
  }

  display.innerHTML = html;
  return;
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
  randomPick.innerHTML = `<div class="movie" >Random picked: ${movieArr[pickRandom]} </div>`;
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
    searchResult.innerHTML = `Found: <div class ="movie">${searchBar.value}</div>`;
    fieldset.style.display = "block";
  } else if (searchRes === false) {
    searchResult.textContent = `Not found: ${searchBar.value}`;
  }
};
