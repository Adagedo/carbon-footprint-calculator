import { Stack, Text, ChakraBaseProvider, Box } from "@chakra-ui/react";
import "./public.css";

export default function PHome() {
	return (
		<div>
			<div className="Home">
				<ChakraBaseProvider>
					<Box
						bgImage={"/src/Home/public/pexels-luisdelrio-15286.jpg"}
						backgroundRepeat="no-repeat"
						height={500}>
						<Stack direction="row">
							<div className="details">
								<Text
									bgGradient="linear(to-l,green, white)"
									bgClip="text"
									fontSize="70px"
									fontWeight="extrabold"
									bgSize={"contain"}>
									What is your carbon footPrint? SignUp for a free account and
									Keep track of the the gases you generate by your actions
								</Text>
							</div>
						</Stack>
					</Box>
					<Box></Box>
				</ChakraBaseProvider>
			</div>
		</div>
	);
}
