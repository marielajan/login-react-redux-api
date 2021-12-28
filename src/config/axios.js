import axios from 'axios';

const client = axios.create({
    baseURL: 'https://trabajo-mcga-server-mariel-jan.herokuapp.com/api'
}) 

export default client;