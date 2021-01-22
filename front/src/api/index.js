import axios from 'axios'

console.log(csrfToken)

const modelApi = axios.create({
  baseURL: process.env.VUE_APP_MODEL_API_URL,
  timeout: 60000,
})

modelApi.interceptors.request.use()

export {
  modelApi
}
