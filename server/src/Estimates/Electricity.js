const axios = require("axios");

async function ElectricityCarbonEmissions(data) {
	const { type, type_uint, type_value, country, state } = data;
	try {
		const response = axios.post(
			curl,
			{ data },
			{
				headers: {
					Authorization: "Bearer API_KEY",
					"Content-Type": "application/json",
				},
			}
		);
		const { data } = response;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}
module.exports = ElectricityCarbonEmissions;
