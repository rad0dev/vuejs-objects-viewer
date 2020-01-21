<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Title</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ObjectsViewer',
  created () {

  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  mounted () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
}
</script>

<style scoped>

</style>
