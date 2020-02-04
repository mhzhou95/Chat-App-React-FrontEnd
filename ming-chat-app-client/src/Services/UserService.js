import axios from 'axios';

const createUser = (user) => {
  axios.post("http://localhost:8080/api/users/", user)
  .then(response => response.data)
}

const loginUser = (userToLogin) => {
  return axios.post("http://localhost:8080/api/users/login", userToLogin)
  .then( response => response.data)
}
export { createUser, loginUser};
