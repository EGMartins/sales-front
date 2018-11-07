import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://18.231.179.102:3003'
})

export default instance