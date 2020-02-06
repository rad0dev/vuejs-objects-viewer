<template>
  <button @click="sortData()">
    <span>{{ sortType }}</span>
    <v-icon :size="'medium'">
      {{ sortType === sortBy && sortOrder
      ? sortOrder === 'ASC' ? 'mdi-sort-ascending' : 'mdi-sort-descending'
      : 'mdi-sort' }}
    </v-icon>

  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ObjectsTableSortBtn',
  props: {
    sortType: String
  },
  computed: mapGetters({
    sortBy: 'getSortBy',
    sortOrder: 'getSortOrder'
  }),
  data () {
    return {
      sort: null,
      sortOrderDesc: false
    }
  },
  methods: {
    ...mapActions([
      'changeSortBy',
      'changeSortOrder',
      'fetchPosts'
    ]),
    sortData () {
      if (this.sortType === this.sortBy) {
        this.changeSortOrder()
      } else {
        this.changeSortOrder('ASC')
        this.changeSortBy(this.sortType)
      }
      this.fetchPosts()
    }
  }
}
</script>

<style scoped>
  span {
    vertical-align: middle;
    text-transform: capitalize;
    margin-right: .5em;
  }
</style>
