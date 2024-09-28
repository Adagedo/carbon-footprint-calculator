const axios = require("axios");
const curl = "https://www.carboninterface.com/api/v1/estimates";

async function FuelCombusionEstimatedCarbonEmission(data) {
	const { type, feul_source_type, feul_source_unit, feul_source_value } = data;
	try {
		const response = await axios.post(
			curl,
			{ type, feul_source_type, feul_source_unit, feul_source_value },
			{
				headers: {
					Authorization: "Bareer apikey",
					"Content-Type": "Application/json",
				},
			}
		);
		const { data } = response;
		return data;
	} catch (error) {
		console.log(error);
	}
}

module.exports = FuelCombusionEstimatedCarbonEmission;
