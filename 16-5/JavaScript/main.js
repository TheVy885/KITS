console.log("hello world");

// bt1
let myFunction = (a, b) => a * b;
console.log("ket qua cua 3 * 7 =", myFunction(3, 7));

//bt2
let i;

const check = (i) =>
  i % 2 === 0 ? console.log("i la so chan") : console.log("i la so le");

check(4);

//bt3
let Name = "luân";
let hello = "Xin chào ";
const writeName = (name) => console.log(hello + name + " !!!");

// console.log(writeName(Name));

writeName(Name);

//bt4

let age = 8;
const info = (name, age) => console.log(hello + name + " " + age + " tủi!");

info(Name, age);

// function sayhi()
// {
//     console.log(name);
//     console.log(age);

//     var name="lydia";
//     let age=21;

// };
// sayhi();

console.log(!!true);
console.log(!"Luan");

function sum(a, b) {
  return a + b;
}
console.log(sum(1, "2"));

let number = 0;

console.log(number++);
console.log(++number);
console.log(number);

//bt

const checkReuslt = (x) => {
  switch (true) {
    case x < 5:
      console.log("Không Đạt");
      break;
    case x >= 5 && x < 6.5:
      console.log(" Đạt");
      break;
    case x >= 6.5 && x < 8:
      console.log(" Khá");
      break;
    case x >= 8 && x <= 10:
      console.log(" Giỏi");
      break;
    default:
      console.log("Điểm ko hợp lệ");
  }
};
checkReuslt(77);

//bt1
const logI = (n) => {
  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
  } else console.log("số ko hợp lệ");
};

logI(10);

//bt2

const sumTotal = (n) => {
  let total = 0;
  for (let i = 0; i <= 100; i++) {
    total += i;
  }
  console.log("tổng 1 đến 100 là ", total);
};

sumTotal(100);

// console.log("bt2");
// for (let i = 0; i <= 100; i++) {
//   total += i;
// }
// console.log(total);

//bt3
const bt3 = () => {
  for (let i = 1; i <= 10; i++) {
    var mutiplication_9;
    var n = "9";
    mutiplication_9 = n * i;
    console.log(n + " * " + i + " = " + mutiplication_9);
  }
};
bt3();


// document.getElementById("introduce").style.color = "red";
// document.getElementById("introduce").style.color="pink";
