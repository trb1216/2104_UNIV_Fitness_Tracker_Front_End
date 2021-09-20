import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register"> Register</Link>
        <Link to="/activities"> Activities</Link>
        <Link to="/routines"> Routines</Link>
      </nav>
    </Grid>
  );
};

export default Navbar;
