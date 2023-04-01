import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
	return (
		<div>
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
};

export default WebLayout;
