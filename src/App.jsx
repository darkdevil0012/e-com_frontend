import * as React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
	Link,
	BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Product_detail from "./pages/product_detail";
import Header from "./pages/header";
import { CartContainer } from "./context/cartContext";
import Cart from "./pages/cart";
import AddProduct from "./pages/AddProduct";
import LoginPage from "./pages/LoginPage";
import EditProduct from "./pages/EditProduct";
import CheckOut from "./pages/checkout_page";
import ThankYou_Page from "./pages/ThankYou_Page";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./pages/Footer";
import Orders from "./pages/Orders";
import Feedback from "./pages/Feedbacks";
import Register from "./pages/Register";
function App() {
	return (
		<>
			<BrowserRouter>
				<div className="page-container">
					<CartContainer>
						<div className="content-wrap">
							<Header />

							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/product_detail/:id"
									element={<Product_detail />}
								/>
								<Route path="/cart" element={<Cart />} />
								<Route path="/addproduct" element={<AddProduct />} />
								<Route path="/login" element={<LoginPage />} />
								<Route path="/checkout" element={<CheckOut />} />
								<Route path="/thankyou" element={<ThankYou_Page />} />
								<Route path="/contact" element={<ContactPage />} />
								<Route path="/products/edit/:id" element={<EditProduct />} />
								<Route path="/orders" element={<Orders />} />
								<Route path="/allfeedbacks" element={<Feedback />} />
								<Route path="/register" element={<Register />} />
							</Routes>
						</div>
						<Footer />
					</CartContainer>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
