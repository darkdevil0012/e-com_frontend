import "./Feedbacks.css";
import { useEffect, useState } from "react";
import { CircularProgress, Container } from "@mui/material";

const Feedback = () => {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchfeedbacks = async () => {
		setLoading(true);
		//http://localhost:8000
		const response = await fetch(
			"https://elegant-bracelet-bear.cyclic.cloud/feedback/allfeedbacks"
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
