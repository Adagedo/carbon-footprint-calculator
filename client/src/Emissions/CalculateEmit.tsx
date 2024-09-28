import Electricity from "./Electricity";
import Fuel from "./Fuel";
import Vehicle from "./Vehicle";
import Flight from "./Flight";
import Shipping from "./Shipping";
import { useState } from "react";
import { ChakraProvider, Box, Select } from "@chakra-ui/react";

export default function CalculateEmit() {
	const [Type, setType] = useState("");

	function handleSelectChange(e: any) {
		setType(e.target.value);
	}

	return (
		<div>
			<ChakraProvider>
				<Box display={"flex"} gap={550} margin={10}>
					<Box display={"block"}>
						<Box>
							<form>
								<h1>Calculations</h1>
								<div className="type">
									<label htmlFor="type">Select Type</label>
									<Select
										placeholder="Select type"
										value={Type}
										onChange={handleSelectChange}>
										<option value="electricity">Electricity</option>
										<option value="fuel">Fuel</option>
										<option value="vehicle">Vehicle</option>
										<option value="flight">Flight</option>
										<option value="shipping">shipping</option>
									</Select>
								</div>

								<div className="type">
									{Type === "electricity" ? (
										<Electricity />
									) : Type === "fuel" ? (
										<Fuel />
									) : Type === "vehicle" ? (
										<Vehicle />
									) : Type === "flight" ? (
										<Flight />
									) : Type === "shipping" ? (
										<Shipping />
									) : (
										<p>Please select a type</p>
									)}
								</div>

								<div className="action">
									<button type="button">Calculate</button>
								</div>
							</form>
						</Box>
						<Box>
							<h1>Charts</h1>
						</Box>
					</Box>
					<Box bg={"green"} width={400} borderRadius={20} padding={10}>
						<h1>Output</h1>
					</Box>
				</Box>
			</ChakraProvider>
		</div>
	);
}
