import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Assuming your backend is running on this URL
  //timeout: 10000, // Timeout of 5 seconds
});

export default instance;