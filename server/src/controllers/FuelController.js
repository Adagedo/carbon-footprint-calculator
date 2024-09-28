const FuelCombusionEstimatedCarbonEmission = require("../Estimates/fuelCombusion");
const FuelCarbonEstimateController = (request, response) => {
	const { type, feul_source_type, feul_source_unit, feul_source_value } =
		request.body;
	const fuelResponse = FuelCombusionEstimatedCarbonEmission({
		type,
		feul_source_type,
		feul_source_unit,
		feul_source_value,
	});
	if (!fuelResponse) {
		response.status(404);
	}
	response.send(fuelResponse);
};

module.exports = FuelCarbonEstimateController;
