import axios from 'axios';

const getChatRoom = () => {
  return axios.get("http://localhost:8080/chatroom/")
  .then( response => response.data );
}
const getCurrentChatRoom = (id) => {
  return axios.get(`http://localhost:8080/chatroom/${id}`)
  .then( response => response.data );
}

const createChatRoom = (name) => {
  return axios.post(`http://localhost:8080/chatroom/`, name)
  .then( response => response.data ); 
}

const deleteChatRoom = (id, makerId) => {
  return axios.delete(`http://localhost:8080/chatroom/${id}`, { params:{ userId: makerId}})
}

const addMessage = (id, message) => {
  return axios.post(`http://localhost:8080/chatroom/${id}/messages/`, message)
}

const deleteMessage = (id, mId) => {
  return axios.delete(`http://localhost:8080/chatroom/${id}/messages/${mId}`)
}

export { getChatRoom , addMessage, deleteMessage, getCurrentChatRoom, createChatRoom, deleteChatRoom};