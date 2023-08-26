import "./ContactPage.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

const ContactPage = () => {
	const [customerEmail, setCustomerEmail] = useState("");
	const [customerFeedback, setCustomerFeedback] = useState("");
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	const handleChange = (ev) => {
		const { value, name } = ev.target;
		if (name === "customerEmail") {
			setCustomerEmail(value);
		}
		if (name === "feedback") {
			setCustomerFeedback(value);
		}
	};

	const handleSubmit = async () => {
		const CustomerData = {
			customerEmail,
			customerFeedback,
		};

		//http://localhost:8000
		const response = await fetch(
			"https://elegant-bracelet-bear.cyclic.cloud/feedback/contact",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(CustomerData),
			}
		);
		const data = await response.json();
		setMessage(data.message);
		setOpen(true);
		setCustomerEmail("");
		setCustomerFeedback("");
	};

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
				<h1>Submit Your FeedBack/Query</h1>
			</div>
			<div className="container_Loginform">
				<TextField
					fullWidth
					value={customerEmail}
					onChange={handleChange}
					id="outlined-basic"
					name="customerEmail"
					label="Email"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={customerFeedback}
					onChange={handleChange}
					id="outlined-basic"
					name="feedback"
					label="Feedback/Query"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<Button onClick={handleSubmit} fullWidth variant="contained">
					Submit
				</Button>
			</div>
		</>
	);
};
export default ContactPage;
