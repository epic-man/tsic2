import axios from 'axios';
export default axios.create({
    baseURL: 'http://192.168.1.73:8080/users'
})
