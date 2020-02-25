import axios from 'axios';


const getAllMessages = (chatRoomId) => {
  return axios.get(`https://ming-chat-app-api.herokuapp.com/message/findAll/${chatRoomId}`)
  .then(response => response.data)
}

const deleteMessage = (id) => {
  axios.delete(`https://ming-chat-app-api.herokuapp.com/message/${id}`)
}

const createMessage = (id ,message) => {
  axios.post(`https://ming-chat-app-api.herokuapp.com/message/${id}`, message)
  .then(response => response.data)
}

export { createMessage, deleteMessage, getAllMessages};