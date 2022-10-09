import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
	const [selectedItem, setselectedItem] = useState(0);
	const [expanded, setExpanded] = useState(true);

	const sidebarVariants = {
		true: {
			left: "0",
		},
		false: {
			left: "-60%",
		},
	};

	return (
		<>
			<div
				className="bars"
				style={expanded ? { left: "60%" } : { left: "5%" }}
				onClick={() => setExpanded(!expanded)}
			>
				<UilBars />
			</div>
			<motion.div
				className="Sidebar"
				variants={sidebarVariants}
				animate={window.innerWidth <= 768 ? `${expanded}` : ""}
			>
				<div className="logo">
					<img src={Logo} alt="Logo" />
					<span>
						Sh<span>o</span>p
					</span>
				</div>
				<div className="menu">
					{SidebarData.map((item, index) => {
						return (
							<div
								className={
									selectedItem === index ? "menuItem active" : "menuItem"
								}
								key={index}
								onClick={() => setselectedItem(index)}
							>
								<item.icon />
								<span>{item.heading}</span>
							</div>
						);
					})}

					<div className="menuItem">
						<UilSignOutAlt />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;
