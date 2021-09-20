const URL = "https://fitnesstrac-kr.herokuapp.com/api";

export const allActivities = async () => {
  const fetchArgs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(URL + "/activities", fetchArgs);
  const json = await res.json();

  return json;
};

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
  const res = await fetch(URL + "/users/register", fetchArgs);
  const json = await res.json();
  window.localStorage.setItem("token", json.token);

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
  const res = await fetch(URL + "/users/login", fetchArgs);
  const json = await res.json();
  window.localStorage.setItem("token", json.token);
  console.log(json);
  return json;
};

export const userInfo = async (token) => {
  const fetchArgsUser = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(URL + "/users/me", fetchArgsUser)
  const json = await res.json();
  window.localStorage.setItem("token", json.token);
  console.log(json);
  return json;
};

export const publicRoutines = async () => {
  const fetchArgs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(URL + "/users/:username/routines", fetchArgs);
  const json = await res.json();

  return json;
};
