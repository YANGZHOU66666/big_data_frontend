import axios from 'axios'

const httpService = axios.create({
    baseURL: 'http://localhost:5000/',
})

httpService.interceptors.request.use(
    config => {
        if (sessionStorage.getItem('token')!= null) {
            console.log(sessionStorage.getItem('token'))
            config.headers['token'] = sessionStorage.getItem('token')
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject()
    },
)

export default httpService

