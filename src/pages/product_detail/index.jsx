import "./Product_detail.css";
import CartContext from "../../context/cartContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const Product_detail = () => {
	const [test, setTest] = useState({});
	const [productName, setProductName] = useState();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const { id } = useParams();
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	const cartContext = useContext(CartContext);
	const { addToCart, removeFromCart } = cartContext;

	const fetchSingleProduct = async () => {
		setLoading(true);
		const response = await fetch(
<<<<<<< HEAD
			`https://wild-lime-hatchling-tux.cyclic.cloud/products/${id}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
=======
			`https://wild-lime-hatchling-tux.cyclic.cloud/products/${id}`
>>>>>>> 53a56b3f9da0be78126974d88948e1c38c8986fc
		);
		const data = await response.json();
		setTest(data.product);
		setProductName(data.product.productName);
		setLoading(false);
	};

	const deleteSingleProduct = async () => {
		const response = await fetch(
<<<<<<< HEAD
			`https://wild-lime-hatchling-tux.cyclic.cloud/products/delete/${id}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
=======
			`https://wild-lime-hatchling-tux.cyclic.cloud/products/delete/${id}`
>>>>>>> 53a56b3f9da0be78126974d88948e1c38c8986fc
		);
		const data = await response.json();
		setMessage(data.message);
		setOpen(true);
	};

	useEffect(() => {
		fetchSingleProduct();
		const isUser = localStorage.getItem("user");
		if (isUser) {
			setUser(isUser);
		}
	}, []);

	return (
		<>
			<div className="Heading">
				<h1>Product Details</h1>
			</div>
			<div className="product_container">
				{loading ? (
					<CircularProgress />
				) : (
					<>
						<Grid container spacing={4}>
							<Grid item md={5}>
								<div className="detail_page">
									<img src={test.image} />
								</div>
							</Grid>
							<Grid item md={7}>
								<div className="product_details">
									<h2>{"Name:" + test.productName}</h2>
									<h2>{"Color:" + test.color}</h2>
									<h2>{"Price:" + test.price + " Rs"}</h2>
									<h2>{"Description:" + test.description}</h2>
									<Button
										variant="outlined"
										color="error"
										onClick={() => addToCart(test)}>
										Add To Cart
									</Button>
									<Button
										className="RemoveFromCart_btn"
										variant="outlined"
										color="error"
										onClick={() => removeFromCart(test.productName)}>
										Remove From Cart
									</Button>
									<br />
									<br />
								</div>
								<div>
									<Link to="/">
										<Button variant="contained">Back To Home Page</Button>
									</Link>
								</div>
							</Grid>
						</Grid>

						{user ? (
							<div>
								<Snackbar
									anchorOrigin={{ vertical: "top", horizontal: "right" }}
									open={open}
									onClose={() => setOpen(false)}
									autoHideDuration={3000}
									message={message}
								/>
								<Grid container>
									<Grid item md={5}></Grid>
									<Grid item md={7}>
										<div>
											<IconButton
												onClick={() => navigate(`/products/edit/${id}`)}>
												<EditIcon
													fontSize="large"
													className="singleproduct_icon"
												/>
											</IconButton>
											<IconButton onClick={deleteSingleProduct}>
												<DeleteIcon
													fontSize="large"
													className="singleproduct_icon"
												/>
											</IconButton>
										</div>
									</Grid>
								</Grid>
							</div>
						) : (
							<></>
						)}
					</>
				)}
			</div>
		</>
	);
};
export default Product_detail;
