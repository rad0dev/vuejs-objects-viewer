<template>
  <div class="filter-window">
    <v-radio-group v-model="filterBy" row>
      <v-radio label="ID"
               value="id"></v-radio>
      <v-radio label="Title"
               value="title"></v-radio>
    </v-radio-group>
    <v-text-field label="Value"
                  v-model="filterValue"></v-text-field>
    <v-btn small
           v-on:click="fetchPosts">Filter</v-btn>
    <v-btn text
           icon
           color="red"
           v-if="filterBy || filterValue"
           v-on:click="resetFilter">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PostsTableFilter',
  computed: {
    filterBy: {
      set (filterBy) {
        this.changeFilterBy(filterBy)
      },
      get () {
        return this.$store.getters.getFilterBy
      }
    },
    filterValue: {
      set (filterValue) {
        this.changeFilterValue(filterValue)
      },
      get () {
        return this.$store.getters.getFilterValue
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchPosts',
      'changeFilterBy',
      'changeFilterValue'
    ]),
    filter () {
      if (this.filterBy && this.filterValue) {
        this.fetchPosts()
      }
    },
    resetFilter () {
      this.filterBy = null
      this.filterValue = null
      this.fetchPosts()
    }
  }
}
</script>

<style scoped>
  .filter-window {
    display: flex;
    align-items: center;
    width: 60%;
  }
  .filter-window > * {
    margin: 0 5px;
  }
</style>
