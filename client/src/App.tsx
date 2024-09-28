import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateLayOut from "./layouts/private/PrivateLayOut";
import PublicLayOut from "./layouts/public/PublicLayOut";
import PHome from "./Home/public/PHome";
import Login from "./users_logins/Login/Login";
import Register from "./users_logins/Register/Register";
import PvHome from "./Home/private/PvHome";
import Verify from "./users_logins/Verification/Verify";
import CalculateEmit from "./Emissions/CalculateEmit";
const router = createBrowserRouter([
	{
		path: "/",
		element: <PrivateLayOut />,
		children: [
			{
				path: "/home",
				element: <PvHome />,
				index: true,
			},
			{
				path: "/emmission",
				element: <CalculateEmit />,
			},
		],
	},
	{
		path: "/",
		element: <PublicLayOut />,
		children: [
			{
				path: "pv-home",
				element: <PHome />,

				index: true,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "verify-token",
				element: <Verify />,
			},
		],
	},
]);

export default function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
