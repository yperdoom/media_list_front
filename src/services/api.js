import axios from 'axios'
import qs from 'qs'

const request = config => {

  // config.headers['Api-Version'] = process.env.API_VERSION
  // config.headers['Client-Type'] = 'panel'
  // if (store.state.auth.token) {
  //   config.headers.Authorization = 'Bearer ' + store.state.auth.token
  // }
  return config
}

const response = response => {
  return response
}

const axiosInstance = axios.create({
  baseURL: 'frontpedro.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

axiosInstance.interceptors.request.use(request)

export default axiosInstance
