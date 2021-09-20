import { Grid } from '@mui/material';
import React, { useState, useEffect } from "react";
import { userLogin } from "../api/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log({ username, password });
  }, [username, password]);

  async function submitForm(e) {
    e.preventDefault();
    const result = await userLogin(username, password);
    console.log(result);
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </Grid>
  );
};

export default Login;