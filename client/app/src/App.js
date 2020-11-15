import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import client from "./config/grapql"
import { ApolloProvider } from "@apollo/client"


import Home from './pages/Home'
import Build from './pages/Build'
import Login from './pages/Login';
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Detail from './pages/Detail'
import PartList from './pages/PartList'
import MyBuild from './pages/MyBuild'

// PC Components Lists
import Cpus from './pages/Cpus'
import Motherboards from './pages/Motherboards'
import PowerSupplies from './pages/PowerSupplies';
import Storages from './pages/Storages'
import Rams from './pages/Rams'
import CpuCoolers from './pages/CpuCoolers'
import Casings from './pages/Casings'
import Gpus from './pages/Gpus'




function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/parts/detail">Part Details</Link>
              </li>
              <li>
                <Link to="/build">Build PC</Link>
              </li>
              <li>
                <Link to="/parts/cpus">CPU</Link>
              </li>
              <li>
                <Link to="/parts/motherboards">Motherboards</Link>
              </li>
              <li>
                <Link to="/parts/powersupplies">Power Supplies</Link>
              </li>
              <li>
                <Link to="/parts/gpus">GPU</Link>
              </li>
              <li>
                <Link to="/parts/cpucoolers">CPU Coolers</Link>
              </li>
              <li>
                <Link to="/parts/rams">RAM</Link>
              </li>
              <li>
                <Link to="/parts/storages">Storages</Link>
              </li>
              <li>
                <Link to="/parts/casings">Casings</Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <Switch>
              <Route path="/build">
                <Build />
              </Route>
              <Route path="/mybuild">
                <MyBuild />
              </Route>
              <Route path="/parts/detail">
                <Detail />
              </Route>

              <Route path="/parts/motherboards">
                <Motherboards />
              </Route>
              <Route path="/parts/cpus">
                <Cpus />
              </Route>
              <Route path="/parts/gpus">
                <Gpus />
              </Route>
              <Route path="/parts/casings">
                <Casings />
              </Route>
              <Route path="/parts/storages">
                <Storages />
              </Route>
              <Route path="/parts/cpucoolers">
                <CpuCoolers />
              </Route>
              <Route path="/parts/rams">
                <Rams />
              </Route>
              <Route path="/parts/powersupplies">
                <PowerSupplies />
              </Route>


              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>


              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
