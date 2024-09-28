const vehicleEstimatedCarbonEmission = require("../Estimates/vehicle");

const vehicleController = (request, response) => {
	const { type, distance_unit, distance_value, vehicle_model_id } =
		request.body;
	const vehicleResponse = vehicleEstimatedCarbonEmission(
		type,
		distance_unit,
		distance_value,
		vehicle_model_id
	);
	if (!vehicleResponse) {
		response.status(404);
	}
	response.send(vehicleResponse);
};

module.exports = vehicleController;
