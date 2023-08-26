import "./Register.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Snackbar from "@mui/material/Snackbar";

const Register = () => {
	const navgiate = useNavigate();
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	const handleChange = (ev) => {
		const { value, name } = ev.target;
		if (name === "userEmail") {
			setUserEmail(value);
		}
		if (name === "password") {
			setPassword(value);
		}
	};

	const handleSubmit = async () => {
		const userData = {
			userEmail,
			password,
		};

		//http://localhost:8000
		const response = await fetch(
			"https://elegant-bracelet-bear.cyclic.cloud/users/register",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			}
		);
		const data = await response.json();
		setMessage(data.message);
		setOpen(true);

		if (data.message === "User Registered Sucessfully") {
			navgiate("/login");
		}
	};

	useEffect(() => {
		const isUser = localStorage.getItem("user");
		if (!isUser) {
			navgiate("/login");
		}
	}, []);

	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={open}
				onClose={() => setOpen(false)}
				autoHideDuration={3000}
				message={message}
			/>
			<div className="Login_heading">
				<h1>Register Your Self</h1>
			</div>
			<div className="container_Loginform">
				<TextField
					fullWidth
					value={userEmail}
					onChange={handleChange}
					id="outlined-basic"
					name="userEmail"
					label="UserEmail"
					variant="outlined"
					type="email"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={password}
					onChange={handleChange}
					id="outlined-basic"
					name="password"
					label="Password"
					variant="outlined"
					type="password"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<Button onClick={handleSubmit} fullWidth variant="contained">
					Register
				</Button>
			</div>
		</>
	);
};

export default Register;
