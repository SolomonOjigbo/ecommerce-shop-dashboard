import React from "react";
import "./RightSideBar.css";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import Updates from "../Updates/Updates";

const RightSideBar = () => {
	return (
		<div className="RightSide">
			<div>
				<h3> Recent Updates</h3>
				<Updates />
			</div>
			<div>
				<h3> Customer Review Stats</h3>
				<CustomerReviews />
			</div>
		</div>
	);
};

export default RightSideBar;
