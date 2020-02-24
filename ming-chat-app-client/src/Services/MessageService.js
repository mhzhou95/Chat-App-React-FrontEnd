import axios from 'axios';

const sendMessage = (message) => {
  return axios.post("http://localhost:8080/message/", message)
  .then( response => response.data);
}

const getAllMessages = (chatRoomId) => {
  return axios.get(`http://localhost:8080/message/findAll/${chatRoomId}`)
  .then(response => response.data)
}

export { sendMessage, getAllMessages};