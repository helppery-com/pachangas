import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { project } from "@/config"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
    user: null,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload.user
      localStorage.token = payload.jwt
    }
  },
  actions: {
    initialiseStore(context) {
      context.dispatch('userLoad')
    },
    userLoad: async (context) => {
      if (localStorage.token) {
        try {
          const response = await axios.get(`${project.CMS}users/me`, {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          });
          if (response.data) {
            console.log(context.state);
            context.state.user = response.data
          }
        } catch (error) {
          console.log(error.message)
          localStorage.removeItem('token')
        }
      }
    },
    logout: async(context) => {
      localStorage.removeItem('token');
      window.location.reload()
    }
  },
  getters: {
    user: state => state.user,
    token: state => localStorage.token
  }
})
