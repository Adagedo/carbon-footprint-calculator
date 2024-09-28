const axios = require("axios");

const curl = "https://www.carboninterface.com/api/v1/estimates";

async function FlightEstimatedCarbonEmssion(data) {
	const {
		type,
		passengers,
		lesg: { departure_airport, destination_airport },
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
		return data;
	} catch (error) {
		console.log(error);
	}
}

module.exports = FlightEstimatedCarbonEmssion;
