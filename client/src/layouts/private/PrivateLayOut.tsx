import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,
	Text,
	Box,
	Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function PrivateLayOut() {
	const navigate = useNavigate();
	useEffect(() => {
		const auths = true;
		if (auths) {
			navigate("/");
		} else {
			navigate("/pv-home");
		}
	}, [navigate]);

	return (
		<div>
			<div className="header">
				<ChakraProvider>
					<Box display={"flex"} gap={10} padding={5} zIndex={1}>
						<div className="profile">
							<Menu>
								<MenuButton as={Button} colorScheme="green">
									Profile
								</MenuButton>
								<MenuList>
									<MenuGroup title="Profile">
										<MenuItem>
											<NavLink to={"account"}>My Account</NavLink>
										</MenuItem>
										<MenuItem>Payments </MenuItem>
									</MenuGroup>
									<MenuDivider />
									<MenuGroup title="Help">
										<MenuItem>
											<NavLink to="history">History</NavLink>
										</MenuItem>
										<MenuItem>FAQ</MenuItem>
									</MenuGroup>
								</MenuList>
							</Menu>
						</div>
						<header>
							<Box display={"flex"} gap={10}>
								<NavLink to={"home"}>
									<Text
										bgGradient="linear(to-l,white, green,white)"
										bgClip="text"
										fontSize="20px"
										fontWeight="extrabold"
										bgSize={"contain"}>
										Home
									</Text>
								</NavLink>
								<NavLink to={"resource"}>Resources</NavLink>
								<NavLink to={"emmission"}>Emmisions</NavLink>
								<NavLink to={"about"}>About</NavLink>
							</Box>
						</header>
					</Box>
				</ChakraProvider>
			</div>

			<div className="body">
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
