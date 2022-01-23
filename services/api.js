import axios from 'axios';
const Api = axios.create({
    baseURL: process.env.NEXTJS_API_RUL
})

export default Api;