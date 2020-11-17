import React from "react";
import { Route, Redirect } from "react-router-dom";
import { config } from "../../graphql/reactiveVars";

const PrivateRoutes = ({ component: Component, ...rest }) => {
	let token = localStorage.access_token;
	return (
		<div>
			<Route
				{...rest}
				render={() => {
					if (token) {
						const {
							CPUId,
							CPUCoolerId,
							GPUId,
							RAMId,
							MotherboardId,
							PowerSupplyId,
							StorageId,
							CasingId,
						} = config();

						if (
							CPUCoolerId &&
							CPUId &&
							GPUId &&
							RAMId &&
							MotherboardId &&
							PowerSupplyId &&
							StorageId &&
							CasingId
						) {
							return <Component />;
						} else {
							return <Redirect to="/" />;
						}
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
		</div>
	);
};

export default PrivateRoutes;
