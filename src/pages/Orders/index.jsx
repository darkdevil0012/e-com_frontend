import { CircularProgress, Container } from "@mui/material";
import "./Orders.css";
import { useEffect, useState } from "react";
const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchorders = async () => {
		setLoading(true);
		//http://localhost:8000
		const response = await fetch(
			"https://wild-lime-hatchling-tux.cyclic.cloud/orders/allorders"
		);
		const data = await response.json();
		setOrders(data.orders);
		setLoading(false);
	};

	useEffect(() => {
		fetchorders();
	}, []);

	const allorders = orders.map((data, id) => {
		return (
			<Container key={id}>
				<div className="Orders_info">
					<h3>Customer Email: {data.email}</h3>
					<h3>Customer address: {data.address}</h3>
					<h3>Customer Phone Number: {data.phoneNumber}</h3>
					<h3>Customer Name: {data.name}</h3>
					<h3>Customer Products Ids: {data.products}</h3>
				</div>
			</Container>
		);
	});
	return <>{loading ? <CircularProgress /> : <>{allorders}</>}</>;
};

export default Orders;
