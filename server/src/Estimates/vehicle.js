const axios = require("axios");
const curl = "https://www.carboninterface.com/api/v1/estimates";
const curl_make =
	"https://www.carboninterface.com/api/v1/estimates/vehicle_makes";

async function vehicleEstimatedCarbonEmission(data) {
	const { type, distance_unit, distance_value, vehicle_model_id } = data;
	try {
		const response = await axios.post(
			curl,
			{ type, distance_unit, distance_value, vehicle_model_id },
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

async function GetListOfVehicleMake() {
	try {
		const response = await axios.get(curl_make);
		const { data } = response;
	} catch (error) {}
}

module.exports = vehicleEstimatedCarbonEmission;
