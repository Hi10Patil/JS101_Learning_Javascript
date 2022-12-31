
for (let i = 1; i <= 10; i++) {
	let n = i;
	let count = 0;

	for (k = 1; k <= n; k++) {
		if (n % k == 0) {
			count++;
		}
	}
	if (count == 2) {
		console.log(i, "prime number");
	}
	else {
		console.log(i, "not a prime number");
	}
}