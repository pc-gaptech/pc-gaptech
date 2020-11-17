import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Client from "./graphql/client";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Configurator from "./pages/configurator/configurator";
import PartList from "./pages/configurator/PartList";
import Favorites from "./pages/favorite/Favorites";
import DetailPart from "./pages/detailPart";
import FinishedBuild from "./pages/configurator/FinishedBuild";
import PrivateRoute from "./components/guardRoute/PrivateRoutes";
import PublicRoute from "./components/guardRoute/PublicRoute";
import FinishedRoute from "./components/guardRoute/FinishedRoute"

function App() {
	return (
		<div className="App">
			<ApolloProvider client={Client}>
				<Router>
					<Navbar />
					<Switch>
						<PrivateRoute exact path="/configurator/parts/:component/:id" component={DetailPart} />
						<PrivateRoute exact path="/configurator/parts/:componentType" component={PartList} />
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute exact path="/register" component={Register} />
						<PublicRoute exact path="/login" component={Login} />
						<PrivateRoute exact path="/configurator" component={Configurator} />
						<PrivateRoute exact path="/favorite" component={Favorites} />
						<FinishedRoute exact path="/finished" component={FinishedBuild} />
					</Switch>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
