import { Container } from "@mui/material";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";

const Footer = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const isUser = localStorage.getItem("user");
		if (isUser) {
			setUser(isUser);
		}
	}, []);
	return (
		<>
			{user ? (
				<footer className="sticky_footer">
					<Container>
						<div className=" footer_main">
							<div>
								<h4>Thank You For Visiting </h4>
							</div>
							<div className="footer">
								<Link to={"/register"}>
									<h4 className="footer_heading">Register</h4>
								</Link>
								<Link to={"/addproduct"}>
									<h4 className="footer_heading">Add Product</h4>
								</Link>
								<Link to={"/orders"}>
									<h4 className="footer_heading">Cart InFo</h4>
								</Link>
								<Link to={"/allfeedbacks"}>
									<h4 className="footer_heading">Feedbacks</h4>
								</Link>
							</div>
						</div>
					</Container>
				</footer>
			) : (
				<Container>
					<div className=" footer_main">
						<div>
							<h4>Thank You For Visiting </h4>
						</div>
						<Link to={"/login"}>
							<h4 className="footer_heading">Login</h4>
						</Link>
					</div>
				</Container>
			)}
		</>
	);
};

export default Footer;
