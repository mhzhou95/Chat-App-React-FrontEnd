import axios from 'axios';

const getChatRoom = () => {
  return axios.get("http://localhost:8080/api/chatroom/")
  .then( response => response.data );
}

const addMessage = (id, message) => {
  return axios.post(`http://localhost:8080/api/chatroom/${id}/messages/`, message)
  .then( response => console.log(response.data))
}

export { getChatRoom , addMessage};