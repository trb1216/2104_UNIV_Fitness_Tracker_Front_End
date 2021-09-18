import logo from './logo.svg';
import './App.css';
import { Route, Switch, link } from 'react-router-dom';
import { Navbar, Home, Register, Login } from "./components";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <div>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
          </div>
          
            <Link to="/login"> / Login</Link>
        <Link to="/register"> / Register</Link>
        
        </div>
      </header>
    </div>
  );
};

export default App;
