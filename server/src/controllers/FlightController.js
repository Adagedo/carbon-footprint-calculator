const FlightEstimatedCarbonEmssion = require("../Estimates/Flight");
const FlightCarbonEstimateController = (request, response) => {
	const {
		type,
		passengers,
		lesg: { departure_airport, destination_airport },
	} = request.body;
	const FlightResponse = FlightEstimatedCarbonEmssion({
		type,
		passengers,
		lesg: { departure_airport, destination_airport },
	});
	if (!FlightResponse) {
		response.status(404);
	}
	response.send(FlightResponse);
};
module.exports = FlightCarbonEstimateController;
