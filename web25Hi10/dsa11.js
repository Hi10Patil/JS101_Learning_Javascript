//Fix the given flowchart.

//Below is the flowchart of computing the following sum :
//0 + 5 + 10 + 15 + 20 ......

//There is an error in the following flowchart - Identify it.
//Submit Line number and Corrected text in your answer, 
//For Example : Line 3 should be "Is n<3?”


function number(n) {
	let i = 0;
	let j = 0;
	let sum = 0;
	while (i < n) {
		sum = sum + i;
		j = j + 5;
		i++;
	}
	console.log(sum);
}
