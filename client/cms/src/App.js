import "./App.css";
import {
  GpuAdd,
  CasingAdd,
  CpuAdd,
  CpuCollerAdd,
  MotherBoardAdd,
  PowerSupplayAdd,
  RamAdd,
  StorageAdd,
  AddConfig,
  AddGames,
} from "./pages/addProduct";
import { Home, Login } from "./pages";
import client from "./config/grapql";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/NavbarHome";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoutes path="/cpu" component={CpuAdd} />
          <PrivateRoutes path="/cpucooler" component={CpuCollerAdd} />
          <PrivateRoutes path="/motherboard" component={MotherBoardAdd} />
          <PrivateRoutes path="/gpu" component={GpuAdd} />
          <PrivateRoutes path="/ram" component={RamAdd} />
          <PrivateRoutes path="/storage" component={StorageAdd} />
          <PrivateRoutes path="/casing" component={CasingAdd} />
          <PrivateRoutes path="/powersupplay" component={PowerSupplayAdd} />
          <PrivateRoutes path="/games" component={AddGames} />
          <PrivateRoutes path="/config" component={AddConfig} />
          <PrivateRoutes path="/" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
