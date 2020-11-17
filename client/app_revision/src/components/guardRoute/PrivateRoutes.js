import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
	let token = localStorage.access_token;
	return (
		<div>
			<Route
				{...rest}
				render={() => {
					if (token) {
						return <Component />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
		</div>
	);
};

export default PrivateRoutes;
