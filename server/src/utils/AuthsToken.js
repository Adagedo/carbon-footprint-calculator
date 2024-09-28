function AuthsCode() {
	const random = Math.random();
	const randomTokens = random.toString().replace(".", "").split("").map(Number);
	const TokenArry = randomTokens.slice(3, 9);
	let Code = "";
	for (const value of TokenArry) {
		Code += value;
	}
	return Code;
}

module.exports = AuthsCode;
