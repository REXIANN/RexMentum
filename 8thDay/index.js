const userForm = document.querySelector(".user-form"),
    gameInput = document.querySelector(".game-input"),
    gameNotice = document.querySelector(".game-notice"),
    compareValue = document.querySelector(".compare-values"),
    result = document.querySelector(".result");

let maxValue = 10;

function addResult(userValue, machineValue) {
  let message = 'You Lose...'
  if (parseInt(userValue) === machineValue) {
    message = 'You Win!'
  } 
  result.innerText = message;
}

function handleSubmit(event) {
  event.preventDefault();
  const userValue = userForm.querySelector(".user-input").value;
  const machineValue = Math.floor(Math.random() * maxValue);
  const message =  `You chose: ${userValue}, machine chose: ${machineValue}`
  compareValue.innerText = message
  addResult(userValue, machineValue);
}


function init() {
  gameInput.addEventListener("mousemove", function(event) {
    const value = event.target.value;
    const message = "generate a number between 0 and ";
    gameNotice.innerText = `${message} ${value}`
    maxValue = value;
  })

  userForm.addEventListener("submit", handleSubmit)

}

init();