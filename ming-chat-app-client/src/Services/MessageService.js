import axios from 'axios';

const sendMessage = (message) => {
  return axios.post("http://localhost:8080/api/messages/", message)
  .then( response => response.data)
}

export { sendMessage};