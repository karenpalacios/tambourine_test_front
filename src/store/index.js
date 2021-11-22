import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://api.karenpalacios.com/'

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    }
  },

  actions: {
    /* getCookie() {
      let token = Cookie.get("XSRF-TOKEN");
      if (token) {
        return new Promise(resolve => {
          resolve(token);
        });
      }

      return Api.get("/csrf-cookie");
  } */

    login ({ commit }, credentials) {
      alert('hey')
      return axios
        .get('/sanctum/csrf-cookie')
        .then(({ data }) => {
          console.log(data)
          /* commit('setUserData', data) */
        })
    },

    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters: {
    isLogged: state => !!state.user
  }
})
