import axios from 'axios';

const baseURL = 'https://prefoliovote.ml/';

const client = axios.create({
  baseURL,
  // withCredentials: true,
});

export default client;
