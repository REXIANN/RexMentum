

// 변수 선언시 가능한 const, 어쩔 수 없을 때에만 let을 사용
const name = "jinhyuck";
const number = "123123";

console.log(name, number);

function sayHello(name, age) {
  console.log(`Hello, ${name}. your age is ${age}`)
}

const age = 29;
sayHello(name, age)