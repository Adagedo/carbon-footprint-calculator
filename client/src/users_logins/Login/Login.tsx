import { useForm } from "react-hook-form";
import { LoginTypes } from "./Types/LoginTs";
import { Button, Input } from "@mui/material";
import axios from "axios";

export default function Login() {
	const form = useForm<LoginTypes>();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;

	async function Login() {
		try {
			await axios;
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<div className="form">
				<form onSubmit={handleSubmit(Login)}>
					<div className="email">
						<label htmlFor="email">email</label>
						<Input
							id="name"
							placeholder="name"
							{...register("email", {
								required: {
									value: true,
									message: "email is required",
								},
								pattern: {
									value: /....../,
									message: "invalid email format",
								},
							})}
						/>
						<div className="error">{errors.email?.message}</div>
					</div>
					<div className="password">
						<label htmlFor="password">Passowrd</label>
						<Input
							id="password"
							type="password"
							placeholder="password"
							{...register("password", {
								required: {
									value: true,
									message: "password is required",
								},
								pattern: {
									value: /...../,
									message: "Invalid passowrd format",
								},
							})}
						/>
						<div className="error">{errors.password?.message}</div>
					</div>
					<div className="actions">
						<Button>Login</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
