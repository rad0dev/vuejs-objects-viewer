import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (response.ok) {
        commit('setPosts', (await response.json()))
      }
    }
  },
  getters: {
    getPosts (state) {
      return state.posts
    }
  },
  modules: {
  }
})
