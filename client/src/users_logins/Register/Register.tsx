import { useForm } from "react-hook-form";
import { Button, Input } from "@mui/material";
import { RegisterTypes } from "./types/Register";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Register() {
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<RegisterTypes>();
	async function OnRegister(data: RegisterTypes) {
		const { name, email, password } = data;
		console.log({ name, email, password });
		try {
			const response = await axios.post(
				"http://localhost:5000/register",
				{
					name,
					email,
					password,
				},
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json", // If you're using authorization tokens
					},
				}
			); // Ensure you have the correct URL here
			console.log(response.data);
			navigate("/verify-token");
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<div className="form">
				<div className="head">
					<h1 className="regHead">Creat Account</h1>
				</div>
				<form onSubmit={handleSubmit(OnRegister)}>
					{/* Name Field */}
					<div className="name">
						<label htmlFor="name">Name</label>
						<Input
							className="input"
							id="name"
							placeholder="name"
							{...register("name", {
								required: {
									value: true,
									message: "Name is required",
								},
							})}
						/>
						<div className="error">{errors.name?.message}</div>
					</div>

					{/* Email Field */}
					<div className="email">
						<label htmlFor="email">Email</label>
						<Input
							className="input"
							id="email"
							placeholder="Enter your email"
							type="email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Invalid email format",
								},
							})}
						/>
						<div className="error">{errors.email?.message}</div>
					</div>

					{/* Password Field */}
					<div className="password">
						<label htmlFor="password">Password</label>
						<Input
							className="input"
							id="password"
							placeholder="Password"
							type="password"
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 8,
									message: "Password must be at least 8 characters long",
								},
								pattern: {
									value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, // Example regex for a strong password
									message: "Password must include upper, lower, and a number",
								},
							})}
						/>
						<div className="error">{errors.password?.message}</div>
					</div>

					{/* Submit Button */}
					<div className="action">
						<Button type="submit" variant="contained" color="primary">
							Create Account
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
