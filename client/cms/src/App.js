import './App.css';
import {
  Home, Login, GpuAdd, CasingAdd,
  CpuAdd, CpuCollerAdd, MotherBoardAdd,
  PowerSupplayAdd, RamAdd, StorageAdd
} from "./pages"
import client from "./config/grapql"
import { ApolloProvider } from "@apollo/client"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/NavbarHome"
import PrivateRoutes from "./components/PrivateRoutes"

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addcpu">
            <CpuAdd />
          </Route>
          <Route path="/addcpucoller">
            <CpuCollerAdd />
          </Route>
          <Route path="/addmotherboard">
            <MotherBoardAdd />
          </Route>
          <Route path="/addgpu">
            <GpuAdd />
          </Route>
          <Route path="/addram">
            <RamAdd />
          </Route>
          <Route path="/addstorage">
            <StorageAdd />
          </Route>
          <Route path="/addcasing">
            <CasingAdd />
          </Route>
          <Route path="/addpowersupplay">
            <PowerSupplayAdd />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>

  )
}

export default App;
