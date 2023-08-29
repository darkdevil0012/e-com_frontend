import TextField from "@mui/material/TextField";
import "./addProduct.css";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import Axios from "axios";

const AddProduct = () => {
	const navgiate = useNavigate();
	const [productName, setProductName] = useState("");
	const [color, setColor] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const token = JSON.parse(localStorage.getItem("token"));

	const handleUpload = async (ev) => {
		const file = ev.target.files[0];
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "e_com_web");

		Axios.put(
			"https://api.cloudinary.com/v1_1/dnqplq5hb/image/upload",
			formData
		).then((resp) => {
			setImage(resp.data.url);
		});
	};

	const handleChange = (ev) => {
		const { value, name } = ev.target;
		if (name == "productName") {
			setProductName(value);
		}
		if (name == "color") {
			setColor(value);
		}
		if (name == "price") {
			setPrice(value);
		}
		if (name == "description") {
			setDescription(value);
		}
	};

	const handleSubmit = async () => {
		const productData = {
			productName,
			color,
			price: +price,
			description,
			image,
		};

		const response = await fetch(
			"https://wild-lime-hatchling-tux.cyclic.cloud/products/add",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(productData),
			}
		);
		const data = await response.json();
		setMessage(data.message);
		setOpen(true);
		setProductName("");
		setColor("");
		setDescription("");
		setPrice("");
		setImage("");
	};

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user) {
			navgiate("/login");
		}
	});
	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={open}
				onClose={() => setOpen(false)}
				autoHideDuration={3000}
				message={message}
			/>
			<div className="container_form">
				<h1>Add product Form</h1>
				<TextField
					fullWidth
					value={productName}
					onChange={handleChange}
					id="outlined-basic"
					name="productName"
					label="productName"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={color}
					onChange={handleChange}
					id="outlined-basic"
					name="color"
					label="Color"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					value={price}
					onChange={handleChange}
					id="outlined-basic"
					name="price"
					label="Price"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					multiline
					rows={4}
					value={description}
					onChange={handleChange}
					name="description"
					id="outlined-basic"
					label="Description"
					variant="outlined"
					className="text_field"
					sx={{ input: { color: "#66fcf1" } }}
				/>
				<TextField
					fullWidth
					onChange={handleUpload}
					type="file"
					id="outlined-basic"
					variant="outlined"
				/>
				<Button onClick={handleSubmit} fullWidth variant="contained">
					Submit
				</Button>
			</div>
		</>
	);
};

export default AddProduct;
