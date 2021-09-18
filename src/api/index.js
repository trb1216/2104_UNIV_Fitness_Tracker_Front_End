const URL = "https://fitnesstrac-kr.herokuapp.com/api";
const token = 'UzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzk1L…3Nzl9.eqVqv_yJfEVZoUTUFTFjQvLAV9Tkv0mPjJfy2WMf2d4';


 export const createUser = async (username, password) => {

    const body = {
          username,
          password,
      };
      const fetchArgs = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
const res = await fetch(URL + "users/register", fetchArgs);
const json = await res.json();
// set json.token to local Window.storage localStorage.setItem('token', json.token');
console.log(json);
return json;
    };

export const userLogin = async (username, password) => {

  const body = {
        username,
        password,
    };
    const fetchArgs = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
const res = await fetch(URL + "users/login", fetchArgs);
const json = await res.json();
console.log(json);
return json;
  };


export const userInfo = async (userToken) => {
  const fetchArgsUser = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  await fetch(URL + "/users/me", fetchArgsUser)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch(console.error);
  };