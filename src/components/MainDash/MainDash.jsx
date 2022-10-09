import React from "react";
import Cards from "../Cards/Cards";
import OrdersTable from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
	return (
		<div className="MainDash">
			<h1>Dashboard</h1>
			<Cards />
			<OrdersTable />
		</div>
	);
};

export default MainDash;
