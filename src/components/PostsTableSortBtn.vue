<template>
  <button @click="sortData()">
    <span>{{ sortType }}</span>
    <v-icon v-if="sortType === sortBy" :size="'x-small'">
      {{ sortOrder === 'ASC' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
    </v-icon>
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ObjectsTableSortBtn',
  computed: {
    ...mapGetters({
      sortBy: 'getSortBy',
      sortOrder: 'getSortOrder'
    })
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
  },
  props: {
    sortType: String
  },
  data () {
    return {
      sort: null,
      sortOrderDesc: false
    }
  }
}
</script>

<style scoped>
  span {
    vertical-align: middle;
    text-transform: capitalize;
  }
</style>
