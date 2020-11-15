import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Client from "./graphql/client";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Configurator from "./pages/configurator/configurator";
import PartList from "./pages/configurator/PartList";

function App() {
	return (
		<div className="App">
			<ApolloProvider client={Client}>
				<Navbar />
				<Router>
					<Switch>
						<Route exact path="/configurator/parts/:componentType" component={PartList} />
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/configurator" component={Configurator} />
					</Switch>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
