const title = document.querySelector('#title');


function handleResize(event) {
  console.log(event)
  console.log("I have been resized")
}

window.addEventListener("resize", handleResize);

function handleClick() {
  title.getElementsByClassName.color = "red"
}


title.addEventListener("click", handleClick);