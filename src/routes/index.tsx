import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { WebLayout } from "../components";
import { ErrorBoundary } from "../utils";

const Home = lazy(() => import("../pages/Home"));

const index = createBrowserRouter([
	{
		path: "/",
		element: <WebLayout />,

		children: [
			{
				index: true,
				element: <Home />,
			},
		],

		errorElement: <ErrorBoundary />,
		hasErrorBoundary: true,
	},
]);

export default index;
