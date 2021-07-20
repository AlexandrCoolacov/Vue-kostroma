import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts
    }
  },
  actions: {
    GET_POSTS ({ commit }) {
      return axios('http://localhost:3000/posts', {
        method: 'GET'
      })
        .then((posts) => {
          commit('SET_POSTS', posts.data)
          return posts
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    POSTS (state) {
      return state.posts
    }
  }

})
