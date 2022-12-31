//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let x = 1;
let m = 0;
let n = 0;
while (x <= 10) {
  if (x % 2 == 0) {
    n++;
    m = m + x;
  }
  x++;
}
console.log(m / n);


