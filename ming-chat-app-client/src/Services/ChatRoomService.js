import axios from 'axios';

const getChatRoom = () => {
  return axios.get("https://ming-chat-app-api.herokuapp.com/chatroom/")
  .then( response => response.data );
}
const getCurrentChatRoom = (id) => {
  return axios.get(`https://ming-chat-app-api.herokuapp.com/chatroom/${id}`)
  .then( response => response.data );
}

const createChatRoom = (name) => {
  return axios.post(`https://ming-chat-app-api.herokuapp.com/chatroom/`, name)
  .then( response => response.data ); 
}

const deleteChatRoom = (id, makerId) => {
  return axios.delete(`https://ming-chat-app-api.herokuapp.com/chatroom/${id}`, { params:{ userId: makerId}})
}


export { getChatRoom , getCurrentChatRoom, createChatRoom, deleteChatRoom};