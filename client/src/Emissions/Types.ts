export type ElectricityTy = {
	type: string;
	type_uint: string;
	type_value: string;
	country: string;
	state: string;
};

export type FlightTy = {
	type: string;
	passengers: string;
	lesg: { departure_airport: string; destination_airport: string };
};

export type FuelTy = {
	type: string;
	feul_source_type: string;
	feul_source_unit: string;
	feul_source_value: string;
};

export type VehicleTy = {
	type: string;
	distance_uint: string;
	distance_value: string;
	vehicle_model_id: string;
};

export type ShippingTy = {
	type: string;
	Weight_value: string;
	Weight_unit: string;
	distance_value: string;
	distance_unit: string;
	transport_method: string;
};
