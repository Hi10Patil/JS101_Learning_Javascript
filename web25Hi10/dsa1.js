
let curr_num = 0;
let sum = 0;
let pre_sum = 0;

function number(n) {
	// Write code here


	if (curr_num <= n) {
		pre_sum == sum;;
		sum = curr_num + pre_sum;
		curr_num++;
	}
	console.log(sum);

}