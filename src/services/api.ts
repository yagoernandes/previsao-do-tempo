import axios from 'axios'
import config from '../config/environment'

const api = axios.create({
	baseURL: config.API_URL,
	params:{}
})

api.defaults.params['appid'] = config.API_KEY

api.interceptors.request.use(request => {
	console.log('Request:', request)
	return request
})

export default api
