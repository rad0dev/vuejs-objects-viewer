import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null,
    sortBy: null,
    sortOrder: 'ASC'
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data
    },
    setSortBy (state, data) {
      state.sortBy = data
    },
    setSortOrder (state, data) {
      state.sortOrder = data
    }
  },
  actions: {
    async fetchPosts ({ commit, state }) {
      let params = ''
      if (state.sortBy) {
        params += '?_sort=' + state.sortBy + '&_order=' + state.sortOrder
      }
      const response = await fetch('https://jsonplaceholder.typicode.com/posts' + params)
      if (response.ok) {
        commit('setPosts', (await response.json()))
      }
    },
    changeSortBy ({ commit }, payload) {
      commit('setSortBy', payload)
    },
    changeSortOrder ({ commit, state }, payload) {
      let sortOrder
      if (payload) {
        sortOrder = payload
      }
      if (!payload && state.sortOrder === 'ASC') {
        sortOrder = 'DESC'
      }
      if (!payload && state.sortOrder === 'DESC') {
        sortOrder = 'ASC'
      }
      commit('setSortOrder', sortOrder)
    }
  },
  getters: {
    getPosts (state) {
      return state.posts
    },
    getSortBy (state) {
      return state.sortBy
    },
    getSortOrder (state) {
      return state.sortOrder
    }
  },
  modules: {
  }
})
