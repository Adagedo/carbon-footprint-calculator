import {
	Box,
	Button,
	Input,
	ChakraProvider,
	Text,
	Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ShippingTy } from "./Types";

export default function Shipping() {
	const form = useForm<ShippingTy>({
		defaultValues: {
			type: "shipping",
			Weight_unit: "",
			Weight_value: "",
			distance_unit: "",
			distance_value: "",
			transport_method: "",
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;
	/* 	type,
		Weight_value,
		Weight_unit,
		distance_value,
		distance_unit,
		transport_method,*/

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
								placeholder="Weight_value"
								id="Weight_value"
								{...register("Weight_value", {
									required: {
										value: true,
										message: "Weight_value is required",
									},
								})}
							/>
							<Text>{errors.Weight_value?.message}</Text>
						</Box>
						<Box margin={3}>
							<Select
								placeholder="Weight_unit"
								id="Weight_unit"
								{...register("Weight_unit", {
									required: {
										value: true,
										message: "Weight_unit is required",
									},
								})}>
								<option value="g">g</option>
								<option value="kg">kg</option>
								<option value={"lb"}>lb</option>
								<option value="mt">mt</option>
							</Select>
							<Text>{errors.Weight_unit?.message}</Text>
						</Box>
						<Box margin={3}>
							<Select
								placeholder="distance_unit"
								id="distance_unit"
								{...register("distance_unit", {
									required: {
										value: true,
										message: "distance_unit is required",
									},
								})}>
								<option value="mi">mi</option>
								<option value="km">km</option>
							</Select>
							<Text>{errors.distance_unit?.message}</Text>
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
							<Select
								placeholder="transport_method"
								id="transport_method"
								{...register("transport_method", {
									required: {
										value: true,
										message: "transport_method is required",
									},
								})}>
								<option value="ship">ship</option>
								<option value="trian">train</option>
								<option value="truck">truck</option>
								<option value="plane">plane</option>
							</Select>
							<Text>{errors.transport_method?.message}</Text>
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
