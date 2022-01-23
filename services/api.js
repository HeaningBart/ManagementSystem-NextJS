import axios from 'axios';
const url = 'https://young-waters-77433.herokuapp.com/'
const Api = axios.create({
    baseURL: url
})


export default Api;