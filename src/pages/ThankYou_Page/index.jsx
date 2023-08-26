import { Button } from "@mui/material";
import "./ThankYou_Page.css";
import { Link } from "react-router-dom";

const ThankYou_Page = () => {
	return (
		<>
			<div className="thankyou_page">
				<h3>Thank You For You Order</h3>
				<h4>Your Order Will be Deleivered To You As Soon As Possible</h4>
			</div>
			<div className="thankyou_button">
				<Link to={"/"}>
					<Button variant="contained">Go Back To Home Page</Button>
				</Link>
			</div>
		</>
	);
};

export default ThankYou_Page;
