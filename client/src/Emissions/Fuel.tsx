//type, feul_source_type, feul_source_unit, feul_source_value
import {
	Box,
	Button,
	Input,
	ChakraProvider,
	Text,
	Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FuelTy } from "./Types";
export default function Fuel() {
	const form = useForm<FuelTy>({
		defaultValues: {
			type: "fuel",
			feul_source_type: "",
			feul_source_unit: "gallon",
			feul_source_value: "",
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;

	return (
		<div>
			<form>
				<ChakraProvider>
					<Box>
						<Box margin={3}>
							<Input
								placeholder="type"
								id="type"
								{...register("type", {
									required: {
										value: true,
										message: "type is required",
									},
								})}
							/>
							<Text>{errors.type?.message}</Text>
						</Box>
						<Box margin={3}>
							<Select
								placeholder="feul_source_type"
								id="feul_source_type"
								{...register("feul_source_type", {
									required: {
										value: true,
										message: "feul_source_type is required",
									},
								})}>
								<option value="bit">bit</option>
								<option value="dfo">dfo</option>
								<option value="jf">jf</option>
								<option value="ker">ker</option>
								<option value="ker">ker</option>
								<option value="ng">ng</option>
								<option value="pc">pc</option>
								<option value="pg">pg</option>
							</Select>
							<Text>{errors.feul_source_type?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="feul_source_unit"
								id="feul_source_unit"
								{...register("feul_source_unit", {
									required: {
										value: true,
										message: "feul_source_unit is required",
									},
								})}
							/>
							<Text>{errors.feul_source_unit?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="feul_source_value"
								id="feul_source_value"
								{...register("feul_source_value", {
									required: {
										value: true,
										message: "feul_source_value is required",
									},
								})}
							/>
							<Text>{errors.feul_source_value?.message}</Text>
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
