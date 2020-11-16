import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Client from "./graphql/client";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Configurator from "./pages/configurator/configurator";
import PartList from "./pages/configurator/PartList";
import Favorites from "./pages/favorite/Favorites";
import DetailPart from "./pages/detailPart";
import FinishedBuild from "./pages/configurator/FinishedBuild";

function App() {
	return (
		<div className="App">
			<ApolloProvider client={Client}>
				<Navbar2 />
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/configurator/parts/:component/:id" component={DetailPart} />
						<Route exact path="/configurator/parts/:componentType" component={PartList} />
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/configurator" component={Configurator} />
						<Route exact path="/favorite" component={Favorites} />
						<Route exact path="/finished" component={FinishedBuild} />
					</Switch>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
