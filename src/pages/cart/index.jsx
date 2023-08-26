import "./Cart.css";
import CartContext from "../../context/cartContext";
import { useContext, useEffect, useState } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

const Cart = () => {
	const cartContext = useContext(CartContext);
	const { cartItems, removeFromCart } = cartContext;

	return (
		<>
			<Container maxWidth="lg">
				<h1>Cart page</h1>

				<div>
					{cartItems.length ? (
						cartItems.map((item, id) => (
							<div key={id}>
								<div className="cartRoot">
									<h3>{item.productName}</h3>
									<h3>Rs: {item.price}</h3>
									<DeleteOutlined
										className="delete_icon"
										onClick={() => removeFromCart(item.productName)}
									/>
								</div>
							</div>
						))
					) : (
						<h3 className="noitem_heading">No Items in the Cart</h3>
					)}
					<br />

					{cartItems.length ? (
						<>
							<div>
								<Link to="/checkout">
									<Button variant="contained">Check Out</Button>
								</Link>
							</div>
							<br />
						</>
					) : (
						<></>
					)}
					<Link to="/">
						<Button variant="contained">Back To Home Page</Button>
					</Link>
				</div>
			</Container>
		</>
	);
};

export default Cart;
