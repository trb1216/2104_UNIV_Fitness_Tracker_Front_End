// eslint-disable-next-line no-unused-expressions
// remember basic promises:
// fetch('http://fitnesstrac-kr.herokuapp.com/api/some-endpoint')
// .then(res => {
// if (res.ok) {
//     console.log('fetching')
// } else {
//     console.log('404')
// }
// })
// .then(data => console.log(data))
// .catch(error => console.log('..houston'));

const token =
  "none of your business";
fetch("http://fitnesstrac-kr.herokuapp.com/api/users/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "username",
    password: "password",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("..houston"));

fetch("http://fitnesstrac-kr.herokuapp.com/api/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "username",
    password: "password",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("..houston"));

fetch("http://fitnesstrac-kr.herokuapp.com/api/users/me", {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("..houston"));

// const URL = "https://fitnesstrac-kr.herokuapp.com/api";

// export const register = async (username, password) => {

//     const body = {
//         user: {
//           username,
//           password,
//         },
//       };
//       const fetchArgs = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       };
// const res = await fetch(URL + "users/register", fetchArgs);
// const json = await res.json();
// console.log(json);
// return json ;
