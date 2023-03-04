import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log('BASE_URL: ', BASE_URL);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    // 'Access-Control-Allow-Credentials': true,
  },
});

