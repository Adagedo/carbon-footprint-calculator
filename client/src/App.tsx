import { ThemContextProvider } from "./components/Context/ThemeContext";
import Box from "./components/Context/Box";
import Private from "./components/comspro/Private";
import Profile from "./components/comspro/Profile";
import Toast from "./components/generics/Toast";
import CustomBtn from "./components/generics/CustomBtn";
export default function App() {
	return (
		<div>
			<ThemContextProvider>
				<Box />
			</ThemContextProvider>
			<Private isLoggedIn={true} Component={Profile} />
			<Toast position="left-center" />
			<CustomBtn variant="primary">
				<div className="div">Hello</div>
			</CustomBtn>
		</div>
	);
}
