// reference:
// https://mui.com/api/grid/
// https://mui.com/components/grid/
// npm install @mui/material @emotion/react @emotion/styled
import { Grid } from '@mui/material';
import { Route, Switch } from "react-router-dom";
import { Navbar, Home, Register, Login, Activities, Routines } from "./components";

function App() {
  return (
    <><header>
      <div className="App">
        <Navbar />
       <Grid
       container
       direction="column"
       justifyContent="center"
       alignItems="center"
       >
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
        </Grid>
      </div>
    </header><main>
< Activities />
< Routines />
      </main></>
  );
}

export default App;

