import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login';
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Detail from './pages/Detail'
import PartList from './pages/PartList'




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
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
              <Link to="/parts/motherboards">Part List</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
          <Route path="/parts/detail">
              <Detail />
            </Route>
            <Route path="/parts/motherboards">
              <PartList />
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
    </div>
  );
}

export default App;
