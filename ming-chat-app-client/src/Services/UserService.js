import axios from 'axios';

const createUser = (user) => {
  return axios.post("http://localhost:8080/user/", user)
  .then(response => response.data)
  .then( data => data);
}

const loginUser = (userToLogin) => {
  return axios.post("http://localhost:8080/user/login", userToLogin)
  .then( response => response.data)
  .then( data => data);
}

const editUser = (id, user )=> {
  return axios.put(`http://localhost:8080/user/${id}`, user)
  .then( response => response.data)
  .then( data => data);
}
export { createUser, loginUser, editUser};
