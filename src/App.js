import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar, Home, Register, Login } from "./components";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
