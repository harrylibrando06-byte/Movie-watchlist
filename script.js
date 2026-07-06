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
  updateDisplay();
  movieArr.shift();
};

removeLastMovie.onclick = () => {
  updateDisplay();
  movieArr.pop();
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
