import Request from './request'
import Csrf from './csrf'

export default {
  async register (form) {
    await Csrf.getCookie()

    return Request.post('/register', form)
  },

  async login (form) {
    return Request.post('/login', form)
  },

  async logout () {
    await Csrf.getCookie()

    return Request.post('/logout')
  },

  auth () {
    return Request.get('/user')
  }
}
