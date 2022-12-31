let str = "Hello World";
let space = 0;
for (let i = 0; i < str.length; i++) {
	if (str[i] == " ") {
		space++;
	}
} console.log(space + 1);