import Request from './request'
import Cookie from 'js-cookie'

export default {
  getCookie () {
    const token = Cookie.get('XSRF-TOKEN')

    if (token) {
      return new Promise(resolve => {
        resolve(token)
      })
    }

    return Request.get('/sanctum/csrf-cookie')
  }
}
