import axios from 'axios';

const sendMessage = (message) => {
  return axios.post("https://ming-chat-app-api.herokuapp.com/message/", message)
  .then( response => response.data);
}

export { sendMessage};