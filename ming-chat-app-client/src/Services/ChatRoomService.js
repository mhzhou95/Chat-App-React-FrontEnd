import axios from 'axios';

const getChatRoom = () => {
  return axios.get("http://localhost:8080/chatroom/")
  .then( response => response.data );
}

const addMessage = (id, message) => {
  return axios.post(`http://localhost:8080/chatroom/${id}/messages/`, message)
}

export { getChatRoom , addMessage};