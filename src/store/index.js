import Vue from 'vue'
import Vuex from 'vuex'
import storePersistance from './plugins/storePersistance.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null,
    sortBy: null,
    sortOrder: 'ASC',
    filterBy: null,
    filterValue: null,
    post: null
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
    },
    setFilterBy (state, data) {
      state.filterBy = data
    },
    setFilterValue (state, data) {
      state.filterValue = data
    },
    setPost (state, data) {
      state.post = data
    },
    initPostsTable () {},
    restorePostsTable (state, data) {
      state = Object.assign(state, data)
    }
  },
  actions: {
    async fetchPosts ({ commit, state }) {
      let params = ''
      if (state.sortBy) {
        params += '?_sort=' + state.sortBy + '&_order=' + state.sortOrder
      }
      if (state.filterBy && state.filterValue) {
        if (params) {
          params += '&'
        } else {
          params += '?'
        }
        params += state.filterBy + '=' + decodeURIComponent(state.filterValue)
      }
      const response = await fetch('https://jsonplaceholder.typicode.com/posts' + params)
      if (response.ok) {
        commit('setPosts', (await response.json()))
      }
    },
    async fetchPost ({ commit, state }, payload) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + payload)
      if (response.ok) {
        commit('setPost', (await response.json()))
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
    },
    changeFilterBy ({ commit }, payload) {
      commit('setFilterBy', payload)
    },
    changeFilterValue ({ commit, state }, payload) {
      commit('setFilterValue', payload)
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
    },
    getFilterBy (state) {
      return state.filterBy
    },
    getFilterValue (state) {
      return state.filterValue
    },
    getPost (state) {
      return state.post
    }
  },
  plugins: [storePersistance]
})
