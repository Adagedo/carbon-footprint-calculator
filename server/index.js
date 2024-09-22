function Inplit(number) {
	for (let x = 0; x <= number; x++) {
		let row = "";

		for (let y = 0; y <= x; y++) {
			row += "&";
		}
		console.log(row);
	}
}

console.log(Inplit(8));

function exponent(base, power) {
	let result = 1;
	for (let count = 0; count < power; count++) {
		result = result * base;
	}
	return result;
}
