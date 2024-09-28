const ElectricityCarbonEmissions = require("../Estimates/Electricity");
const ElectricityCarbonEstimateController = (request, response) => {
	//validate
	const { type, type_uint, type_value, country, state } = request.body;
	if (!request.body) {
		return Response.status(404).send("invalid data");
	} else {
		const Estimates_response = ElectricityCarbonEmissions({
			type,
			type_uint,
			type_value,
			country,
			state,
		});
		if (Estimates_response) {
			response.send(Estimates_response);
		}
		response.status(402);
	}
};

module.exports = ElectricityCarbonEstimateController;
