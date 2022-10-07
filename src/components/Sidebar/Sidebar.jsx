import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
	const [selectedItem, setselectedItem] = useState(0);

	return (
		<div className="Sidebar">
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
		</div>
	);
};

export default Sidebar;
