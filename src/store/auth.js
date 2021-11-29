import Request from './request'

export default {
  async register (form) {
    return Request.post('/register', form)
  }
}
