//type,
//passengers,
//lesg: { departure_airport, destination_airport }
import {
	Box,
	Button,
	Input,
	ChakraProvider,
	Text,
	Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FlightTy } from "./Types";
export default function Flight() {
	const form = useForm<FlightTy>({
		defaultValues: {
			type: "flight",
			passengers: "",
			lesg: {
				departure_airport: "",
				destination_airport: "",
			},
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
							<Select
								placeholder="passengers"
								id="passengers"
								{...register("passengers", {
									required: {
										value: true,
										message: "passengers is required",
									},
								})}>
								<option value="economy ">economy </option>
								<option value="premium">premium</option>
							</Select>
							<Text>{errors.passengers?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="departure_airport"
								id="departure_airport"
								{...register("lesg.departure_airport", {
									required: {
										value: true,
										message: "departure_airport is required",
									},
								})}
							/>
							<Text>{errors.lesg?.message}</Text>
						</Box>
						<Box margin={3}>
							<Input
								placeholder="destination_airport"
								id="destination_airport"
								{...register("lesg.destination_airport", {
									required: {
										value: true,
										message: "vehicle_model_id is required",
									},
								})}
							/>
							<Text>{errors.lesg?.message}</Text>
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
