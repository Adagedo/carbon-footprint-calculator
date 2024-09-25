import { NavLink, Outlet } from "react-router-dom";
import { Flex, ChakraProvider } from "@chakra-ui/react";

export default function PublicLayOut() {
	return (
		<div>
			<div className="header">
				<header>
					<ul>
						<ChakraProvider>
							<Flex
								as="nav"
								bg="teal"
								p={2}
								justify="space-around"
								align="center">
								<NavLink to={"pv-home"}>Home</NavLink>
								<NavLink to={"login"}>Login</NavLink>
								<NavLink to={"register"}>Create Account</NavLink>
							</Flex>
						</ChakraProvider>
					</ul>
				</header>
			</div>
			<div className="body">
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
