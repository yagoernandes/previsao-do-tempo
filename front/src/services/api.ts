import axios from 'axios'
import { API_URL } from '../config/environment'

const api = axios.create({
	baseURL: API_URL,
	params: {},
	
})

api.interceptors.request.use(request => {
	return request
})

export default api
