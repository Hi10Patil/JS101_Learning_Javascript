//Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let m = 0;
let n = 0;
for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] % 2 == 0) {
		m = m + arr1[i];
		n++;
	}
}
console.log(m / n);
