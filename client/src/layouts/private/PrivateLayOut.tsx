import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,
	Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function PrivateLayOut() {
	const navigate = useNavigate();
	useEffect(() => {
		const auths = false;
		if (auths) {
			navigate("/");
		} else {
			navigate("pv-home");
		}
	}, [navigate]);

	return (
		<div>
			<div className="header">
				<div className="profile">
					<ChakraProvider>
						<Menu>
							<MenuButton as={Button} colorScheme="pink">
								Profile
							</MenuButton>
							<MenuList>
								<MenuGroup title="Profile">
									<MenuItem>My Account</MenuItem>
									<MenuItem>Payments </MenuItem>
								</MenuGroup>
								<MenuDivider />
								<MenuGroup title="Help">
									<MenuItem>Docs</MenuItem>
									<MenuItem>FAQ</MenuItem>
								</MenuGroup>
							</MenuList>
						</Menu>
					</ChakraProvider>
				</div>
				<header>
					<ul>
						<NavLink to={"/"}>Home</NavLink>
						<NavLink to={"/resource"}>Resources</NavLink>
						<NavLink to={"/emmission"}>Emmisions</NavLink>
						<NavLink to={"/about"}>About</NavLink>
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
