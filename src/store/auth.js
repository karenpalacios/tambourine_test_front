import Request from './request'

export default {
  async register (form) {
    return Request.post('/register', form)
  },
  async sendPasswordReset (form) {
    return Request.post('password/email', form)
  }
}
