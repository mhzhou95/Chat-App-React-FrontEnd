import axios from 'axios';

const getChatRoom = () => {
  return axios.get("http://localhost:8080/api/chatroom/")
  .then( response => response.data );
}

export { getChatRoom };