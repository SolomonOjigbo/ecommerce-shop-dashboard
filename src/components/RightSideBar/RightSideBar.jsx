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
				<CustomerReviews />
			</div>
		</div>
	);
};

export default RightSideBar;
