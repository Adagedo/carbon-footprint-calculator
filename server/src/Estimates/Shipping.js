const curl = "https://www.carboninterface.com/api/v1/estimates";

const axios = require("axios");

async function ShippingEstimattedCarbonEmissions(data) {
	const {
		type,
		Weight_value,
		Weight_unit,
		distance_value,
		distance_unit,
		transport_method,
	} = data;

	try {
		const response = await axios.post(
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
		return response;
	} catch (error) {
		console.log(error);
	}
}

module.exports = ShippingEstimattedCarbonEmissions;
