import axios from 'axios';

const CreateUser = (user) => {
  axios.post("http://localhost:8080/api/users/", user)
  .then(response => response.data)
  .then( data => console.log(data));
}

export {CreateUser};
