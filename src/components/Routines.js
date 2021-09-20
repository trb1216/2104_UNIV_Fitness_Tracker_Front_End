import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { publicRoutines } from "../api/index.js";
const Routines = () => {
  const [routines, setroutines] = useState([]);
  const [listRoutines, setListroutines] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let res = await publicRoutines();
    let routinePosts = res;
    setroutines(routinePosts);
    console.log("Routines", routines);
  }, []);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <h1>Public Routines</h1>
      {listRoutines.length ? (listRoutines.map() ) : (<></>)}
    </Grid>
  );
};

export default Routines;