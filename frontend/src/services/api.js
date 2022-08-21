import axios from 'axios';

const api = axios.create({baseURL: 'https://todolist-backend-9.herokuapp.com'});

export default api;
