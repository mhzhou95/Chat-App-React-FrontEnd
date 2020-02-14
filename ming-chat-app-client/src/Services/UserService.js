import axios from 'axios';

const createUser = (user) => {
  return axios.post("https://ming-chat-app-api.herokuapp.com/user/", user)
  .then(response => response.data)
  .then( data => data);
}

const loginUser = (userToLogin) => {
  return axios.post("https://ming-chat-app-api.herokuapp.com/user/login", userToLogin)
  .then( response => response.data)
  .then( data => data);
}

const editUser = (id, user )=> {
  return axios.put(`https://ming-chat-app-api.herokuapp.com/user/${id}`, user)
  .then( response => response.data)
  .then( data => data);
}

const deleteUser = (id) => {
  return axios.delete(`https://ming-chat-app-api.herokuapp.com/user/${id}`)
  .then( response => response.data)
  .then( data => data);
}

export { createUser, loginUser, editUser, deleteUser};
