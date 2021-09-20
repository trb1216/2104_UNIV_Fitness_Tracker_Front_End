import logo from "./logo.svg";
import "./App.css";
<<<<<<< Updated upstream
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
=======
import { Route, Switch } from "react-router-dom";
import { Navbar, Home, Register, Login, Activities } from "./components";

function App() {
  return (
    <><header>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </header><main>
< Activities />
      </main></>
>>>>>>> Stashed changes
  );
}

export default App;
