import './App.css';
import {
  GpuAdd, CasingAdd,
  CpuAdd, CpuCollerAdd, MotherBoardAdd,
  PowerSupplayAdd, RamAdd, StorageAdd
} from "./pages/addProduct"
import {
  Home, Login
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
import PublicRoute from "./components/PublicRoute"

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>

          <PublicRoute path="/login" component={Login} />
          <PrivateRoutes path="/addcpu" component={CpuAdd} />
          <PrivateRoutes path="/addcpucoller" component={CpuCollerAdd} />
          <PrivateRoutes path="/addmotherboard" component={MotherBoardAdd} />
          <PrivateRoutes path="/addgpu" component={GpuAdd} />
          <PrivateRoutes path="/addram" component={RamAdd} />
          <PrivateRoutes path="/addstorage" component={StorageAdd} />
          <PrivateRoutes path="/addcasing" component={CasingAdd} />
          <PrivateRoutes path="/addpowersupplay" component={PowerSupplayAdd} />
          <PrivateRoutes path="/" component={Home} />

        </Switch>
      </Router>
    </ApolloProvider>

  )
}

export default App;
