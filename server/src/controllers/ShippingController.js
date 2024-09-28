const ShippingEstimattedCarbonEmissions = require("../Estimates/Shipping");

const ShippingController = (request, response) => {
	const {
		type,
		Weight_value,
		Weight_unit,
		distance_value,
		distance_unit,
		transport_method,
	} = request.body;
	const ShippingResponse = ShippingEstimattedCarbonEmissions({
		type,
		Weight_value,
		Weight_unit,
		distance_value,
		distance_unit,
		transport_method,
	});
	if (!ShippingResponse) {
		response.status(404);
	}
	response.send(ShippingResponse);
};

module.exports = ShippingController;
