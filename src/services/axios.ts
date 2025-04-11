import axios from "axios"

const api = axios.create({
  baseURL: 'https://frosiatech_itcAlAX.jeyad360.com/organization/v1/d',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
