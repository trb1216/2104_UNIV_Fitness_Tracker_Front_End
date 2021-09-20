// reference:
// https://mui.com/api/grid/
// https://mui.com/components/grid/
// npm install @mui/material @emotion/react @emotion/styled
import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { publicActivities, updateActivity } from "../api/index.js";
const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [listActivities, setListActivities] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let res = await publicActivities();
    let activityPosts = res;
    setActivities(activityPosts);
    console.log("Activities", activities, setListActivities, updateActivity);
  }, []);
  return (
    <Grid container direction="row" justifyContent="left" alignItems="center">
      <h1>Public Activities</h1>
      <Grid>
        {listActivities.length ? (listActivities.map() ) : (<>{/* Console */}</>)}
      </Grid>
    </Grid>
  );
};

export default Activities;
// As a registered user on the Activities tab, I want to:

// be shown a form to create a new activity (by name and description)
// be shown an error if the activity already exists
