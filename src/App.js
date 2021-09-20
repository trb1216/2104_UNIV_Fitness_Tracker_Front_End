// reference:
// https://mui.com/api/grid/
// https://mui.com/components/grid/
// npm install @mui/material @emotion/react @emotion/styled
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
  );
}

export default App;

