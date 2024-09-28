import { useForm } from "react-hook-form";
import { Input, Button } from "@mui/material";
import axios from "axios";
import "./style.css";
type VerifyTypes = {
	verificationToken: string;
};

export default function Verify() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<VerifyTypes>();
	async function SubmitToken(token: VerifyTypes) {
		try {
			const response = await axios.post(
				"url",
				{ token },
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="verify-header">
			<div className="head">
				<h1>A token is sent to your email, enter to continue</h1>
			</div>
			<form onSubmit={handleSubmit(SubmitToken)}>
				<div className="verification">
					<Input
						className="input"
						id="verificationToken"
						placeholder=""
						{...register("verificationToken", {
							required: {
								value: true,
								message: "Token is Required",
							},
						})}
					/>
					<div className="error">{errors.verificationToken?.message}</div>
				</div>
				<div className="action">
					<Button variant="contained" color={"primary"}>
						continue
					</Button>
				</div>
			</form>
			;
		</div>
	);
}
