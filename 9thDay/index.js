const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`
  image.classList.add("bg-image")
  body.appendChild(image)
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER) ;
  return number;
}

function init() {

}

init();