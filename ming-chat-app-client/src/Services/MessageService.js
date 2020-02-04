import axios from 'axios';

const sendMessage = (message) => {
  axios.post("http://localhost:8080/api/messages/", message)
  .then( response => response.data)
  .then( data => console.log(data))
}

export { sendMessage};