import { Grid } from '@mui/material';
import React from "react";
import { My_Routines } from ".";

const Home = () => {

    return (
          <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
          <h1>You are Home</h1>
          <My_Routines />
      </Grid>
  );
};

export default Home;