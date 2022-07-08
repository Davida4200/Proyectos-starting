let range = 100;

for (let i = 1; i <= range; i++) {
  if (!divisible(i, 3) && !divisible(i, 5)) {
    message = `${i}`;
  }
  if (divisible(i, 3)) {
    message = `${i} Fizz`;
  }
  if (divisible(i, 5)) {
    message = `${i} Buzz`;
  }
  if (divisible(i, 3) && divisible(i, 5)) {
    message = `${i} FizzBuzz`;
  }
  document.write(`${message} <br>`);
}

function divisible(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
/*
let Fizz = false;
for (let i = 1; i <= range; i++) {
  if (i % 3 === 0) {
    document.write(`${i} Fizz<br>`);
    let Fizz = true;
  }
  if (i % 5 === 0) {
    document.write(`${i} Buzz<br>`);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    document.write(`${i} FizzBuzz<br>`);
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    document.write(`${i} Fizz<br>`);
  }
}
*/
