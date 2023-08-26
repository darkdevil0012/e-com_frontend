import "./CheckOut.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CartContext from "../../context/cartContext";

const CheckOut = () => {
	const navgiate = useNavigate();
	const [products, setProducts] = useState([]);
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [name, setName] = useState("");

	const cartContext = useContext(CartContext);
	const { cartItems } = cartContext;

	const handleChange = (ev) => {
		const { value, name } = ev.target;
		if (name === "Email") {
			setEmail(value);
		}
		if (name === "Address") {
			setAddress(value);
		}
		if (name === "PhoneNumber") {
			setPhoneNumber(value);
		}
		if (name === "Name") {
			setName(value);
		}
	};

	const handleSubmit = async () => {
		const OrderData = {
			email,
			address,
			phoneNumber: +phoneNumber,
			name,
			products,
		};

		//http://localhost:8000
		const response = await fetch(
			"https://elegant-bracelet-bear.cyclic.cloud/orders/add",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(OrderData),
			}
		);
		const data = await response.json();

		console.log(data);
	};

	useEffect(() => {
		if (cartItems != []) {
			setProducts(cartItems);
		}
	}),
		[];

	return (
		<>
			<div className="checkout_heading">
				<h1>Check Out</h1>
			</div>
			<div className="container_Loginform">
				<TextField
					fullWidth
					value={email}
					onChange={handleChange}
					id="outlined-basic"
					name="Email"
					label="Email"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={address}
					onChange={handleChange}
					id="outlined-basic"
					name="Address"
					label="Address"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={phoneNumber}
					onChange={handleChange}
					id="outlined-basic"
					name="PhoneNumber"
					label="PhoneNumber"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={name}
					onChange={handleChange}
					id="outlined-basic"
					name="Name"
					label="Name"
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

export default CheckOut;
