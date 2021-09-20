// As an unregistered visitor on the Activities tab, I want to:
import React, { useState, useEffect } from "react";
import { allActivities } from "../api/index.js";
const Activities = () => {
const [publicActivities, setPublicActivities] = useState([]);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(async()=>{
let res = await allActivities
let activityPosts = await res.data
setPublicActivities(activityPosts)
console.log("Activities", publicActivities)
 }, [])
  return (<h1>Public Activites</h1>)
};

export default Activities;

// Probably same logic as getting all posts in stranger things?
// As a registered user on the Activities tab, I want to:

// be shown a form to create a new activity (by name and description)
// be shown an error if the activity already exists
