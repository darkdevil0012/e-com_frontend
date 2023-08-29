import { Link } from "react-router-dom";
import "./Home.css";
// import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import { useContext, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchproduct = async () => {
		setLoading(true);
		const response = await fetch(
			"https://wild-lime-hatchling-tux.cyclic.cloud/products/Allproducts",
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		setProducts(data.product);
		setLoading(false);
	};

	useEffect(() => {
		fetchproduct();
	}, []);

	const AllMobiles = products.map((data, id) => [
		<Grid item md={3} key={id}>
			<Link
				style={{ textDecoration: "none" }}
				key={id}
				to={`/product_detail/${data._id}`}>
				<div className="phone">
					<Card sx={{ maxWidth: "12rem" }} className="card">
						<CardActionArea>
							<CardMedia
								component="img"
								height="auto"
								image={data.image}
								alt="mobile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{data.productName}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{"Rs:" + data.price}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</Link>
		</Grid>,
	]);

	return (
		<>
			<Container maxWidth="lg">
				<div>
					<h1 className="Heading">
						Say goodbye to the old and welcome the new!
					</h1>
					<h3 className="Heading">
						Shop The Lastest Gadgets Now At Affortable Prices
					</h3>
				</div>

				{loading ? (
					<CircularProgress />
				) : (
					<>
						<Grid container spacing={2} className="home_grid">
							{AllMobiles}
						</Grid>
					</>
				)}
			</Container>
		</>
	);
};
export default Home;
