import axios from 'axios';

const createUser = (user) => {
  axios.post("http://localhost:8080/api/users/", user)
  .then(response => response.data)
  .then( data => console.log(data));
}

const loginUser = (userToLogin) => {
  axios.get("http://localhost:8080/api/users/")
  .then( response => response.data)
  .then( data => console.log(data) );
}
export { createUser, loginUser};
