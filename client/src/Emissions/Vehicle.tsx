// type, distance_unit, distance_value, vehicle_model_id
import { useForm } from "react-hook-form";
import { VehicleTy } from "./Types";
import { Box, Button, Input, ChakraProvider, Text } from "@chakra-ui/react";
export default function Vehicle() {
	const form = useForm<VehicleTy>({
		defaultValues: {
			type: "vehicle",
			distance_uint: "",
			distance_value: "",
			vehicle_model_id: "",
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<ChakraProvider>
					<Box marginTop={10} border={"black"}>
						<Box margin={3}>
							<Input
								placeholder="Type"
								id="type"
								{...register("type", {
									required: {
										value: true,
										message: "type selected about is required",
									},
								})}
							/>
							<Text>{errors.type?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="distance_uint"
								id="distance_uint"
								{...register("distance_uint", {
									required: {
										value: true,
										message: "distance_uint is required",
									},
								})}
							/>
							<Text>{errors.distance_uint?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="distance_value"
								id="distance_value"
								{...register("distance_value", {
									required: {
										value: true,
										message: "distance_value is required",
									},
								})}
							/>
							<Text>{errors.distance_value?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="vehicle_model_id"
								id="vehicle_model_id"
								{...register("vehicle_model_id", {
									required: {
										value: true,
										message: "vehicle_model_id is required",
									},
								})}
							/>
							<Text>{errors.vehicle_model_id?.message}</Text>
						</Box>
					</Box>
					<div className="action">
						<Button backgroundColor={"green"}>Calculate</Button>
					</div>
				</ChakraProvider>
			</form>
		</div>
	);
}
