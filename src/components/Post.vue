<template>
  <article v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <v-btn to="/">Return to posts</v-btn>
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Post',
  created () {
    this.fetchPost(this.$route.params.id)
  },
  computed: mapGetters({
    post: 'getPost'
  }),
  methods: mapActions(['fetchPost'])
}
</script>

<style scoped>

</style>
