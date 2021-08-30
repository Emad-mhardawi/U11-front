import axios from 'axios';


let development = process.env.NODE_ENV !=='production';


const axiosInstance = axios.create({
    baseURL: development ? 'http://localhost:5000' : 'https://u11-chas.herokuapp.com',
    
})

export default axiosInstance;

