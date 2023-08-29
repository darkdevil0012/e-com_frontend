import "./Feedbacks.css";
import { useEffect, useState } from "react";
import { CircularProgress, Container } from "@mui/material";

const Feedback = () => {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchfeedbacks = async () => {
		setLoading(true);
		const response = await fetch(
<<<<<<< HEAD
			"https://wild-lime-hatchling-tux.cyclic.cloud/feedback/allfeedbacks",
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
=======
			"https://wild-lime-hatchling-tux.cyclic.cloud/feedback/allfeedbacks"
>>>>>>> 53a56b3f9da0be78126974d88948e1c38c8986fc
		);
		const data = await response.json();
		setFeedback(data.feedbacks);
		setLoading(false);
	};

	useEffect(() => {
		fetchfeedbacks();
	}, []);

	const allfeedback = feedback.map((data, id) => {
		return (
			<Container key={id}>
				<div className="feedback_info">
					<h3>Customer Email: {data.customerEmail}</h3>
					<h3>Customer Feedback: {data.customerFeedback}</h3>
				</div>
			</Container>
		);
	});
	return <>{loading ? <CircularProgress /> : <>{allfeedback}</>}</>;
};

export default Feedback;
