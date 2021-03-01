import axios from 'axios'
import store from '@/store'

const service = axios.create({
  timeout: 10000,
  'Access-Control-Allow-Origin': '*',
})

let requestPending = 0;
const req = {
  pending: () => {
    requestPending++
    store.commit(`SET_LOADING`, true)
  },
  done: () => {
    requestPending--
     if (requestPending <= 0) {
      store.commit(`SET_LOADING`, false)
    }
  }
}

service.interceptors.request.use(
  (config) => {
    req.pending()
    return config
  },
  (error) => {
    req.done()
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    req.done()
    return response
  },
  (error) => {
    req.done()
    return Promise.reject(error)
  }
)

export default service
