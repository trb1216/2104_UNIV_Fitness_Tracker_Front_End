import React, { useState, useEffect } from "react";
import { publicRoutines } from "../api/index.js";
const My_Routines = () => {
const [publicMy_Routines, setPublicMy_Routines] = useState([]);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(async()=>{
let res = await publicRoutines
let activityPosts = await res.data
setPublicMy_Routines(activityPosts)
console.log("My Routines", publicMy_Routines)
 }, [])
  return (<h1>My Routines</h1>)
};

export default My_Routines;