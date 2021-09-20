const URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export const publicActivities = async () => {
  const fetchArgs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${URL}activities`, fetchArgs);
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
  const res = await fetch(`${URL}users/register`, fetchArgs);
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
  const res = await fetch(`${URL}users/login`, fetchArgs);
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
  const res = await fetch(`${URL}users/me`, fetchArgsUser);
  const json = await res.json();
  window.localStorage.setItem("token", json.token);
  console.log(json);
  return json;
};

export const newActivity = async (name, description) => {
  const body = { name, description };
  const fetchArgs = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(`${URL}activities`, fetchArgs);
  const json = await res.json();
  return json;
};

export const updateActivity = async (name, description, activityId) => {
  const body = { name, description };
  const fetchArgs = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${URL}activities/${activityId}`, fetchArgs);
    const json = await res.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const publicRoutinesWithActivity = async (activityId) => {
  const fetchArgs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${URL}activities/${activityId}/routines`, fetchArgs);
  const json = await res.json();

  return json;
};
export const publicRoutines = async () => {
  const fetchArgs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${URL}routines`, fetchArgs);
  const json = await res.json();

  return json;
};
export const newRoutine = async (name, goal, isPublic) => {
  const body = { name, goal, isPublic };
  const fetchArgs = {
    method: "POST",
    body: JSON.stringify(body),
  };
  const res = await fetch(`${URL}routines`, fetchArgs);
  const json = await res.json();
  return json;
};

export const myRoutines = async (username) => {
  const fetchArgs = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(`${URL}users/${username}/routines`, fetchArgs);
    const json = await res.json();

    return json;
  } catch (error) {
    throw error;
  }
};

export const updateRoutine = async (name, goal, routineId) => {
  const body = { name, goal };
  const fetchArgs = {
    method: "PATCH",
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${URL}routines/${routineId}`, fetchArgs);
    const json = await res.json();
    return json;
  } catch (error) {
    throw error;
  }
};
