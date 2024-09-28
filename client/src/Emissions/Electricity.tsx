//type, type_uint, type_value, country, state
import { useForm } from "react-hook-form";
import { ElectricityTy } from "./Types";
import { Box, Button, Input, ChakraProvider, Text } from "@chakra-ui/react";
export default function Electricity() {
	const form = useForm<ElectricityTy>({
		defaultValues: {
			type: "electricity",
			type_uint: "mwh",
			type_value: "",
			country: "",
			state: "",
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
								placeholder="type_unit"
								id="type_unit"
								{...register("type_uint", {
									required: {
										value: true,
										message: "Unit is required",
									},
								})}
							/>
							<Text>{errors.type_uint?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="typeValue"
								id="type_value"
								{...register("type_value", {
									required: {
										value: true,
										message: "value is required",
									},
								})}
							/>
							<Text>{errors.type_value?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="country"
								id="country"
								{...register("country", {
									required: {
										value: true,
										message: "country is required",
									},
								})}
							/>
							<Text>{errors.country?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="state"
								id="state"
								{...register("state", {
									required: {
										value: true,
										message: "state is required",
									},
								})}
							/>
							<Text>{errors.state?.message}</Text>
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
