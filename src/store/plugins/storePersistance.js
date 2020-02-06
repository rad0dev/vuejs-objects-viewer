const expiration = 60 * 60 * 1000
const persistMutations = [
  'setSortBy',
  'setSortOrder',
  'setFilterBy',
  'setFilterValue'
]
const persistState = [
  'sortBy',
  'sortOrder',
  'filterBy',
  'filterValue'
]

const storePersistance = store => {
  store.subscribe((mutation, state) => {
    if (persistMutations.includes(mutation.type)) {
      const stateToSave = {}
      persistState.map((e) => {
        stateToSave[e] = state[e]
      })
      let record = {
        data: stateToSave,
        ts: new Date().getTime() + expiration
      }
      try {
        localStorage.setItem('postsTable', JSON.stringify(record))
      } catch (e) {}
    }
    if (mutation.type === 'initPostsTable') {
      let storage = false
      try {
        storage = localStorage.getItem('postsTable') || false
        if (storage) {
          storage = JSON.parse(storage)
        }
      } catch (e) {}
      if (storage) store.commit('restorePostsTable', storage.data)
    }
  })
}

export default storePersistance
