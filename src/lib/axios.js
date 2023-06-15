import Axios from 'axios'
const axios = Axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})
export default axios
