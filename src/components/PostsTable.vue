<template>
  <div>
    <PostsTableFilter />
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th>
            <PostsTableSortBtn :sort-type="'id'"/>
          </th>
          <th>
            <PostsTableSortBtn :sort-type="'title'"/>
          </th>
          <th>Body</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="post in currentPosts"
            :key="post.id"
            v-on:click="checkPost(post.id)">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body | trim(30) }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
      v-if="pages"
      v-model="currentPage"
      :length="pages"
    ></v-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import PostsTableSortBtn from '@/components/PostsTableSortBtn'
import PostsTableFilter from '@/components/PostsTableFilter'

export default {
  name: 'ObjectsTable',
  components: {
    PostsTableSortBtn,
    PostsTableFilter
  },
  created () {
    this.initPostsTable()
    this.fetchPosts()
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    }),
    currentPosts () {
      if (!this.posts) {
        return []
      }
      const to = this.currentPage * 10
      const from = to - 10
      return this.posts.slice(from, to)
    },
    pages () {
      if (!this.posts) {
        return 0
      }
      return Math.round(this.posts.length / this.itemsInPage)
    }
  },
  data () {
    return {
      currentPage: 1,
      itemsInPage: 10,
      sort: null,
      sortOrderDesc: false
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    ...mapMutations(['initPostsTable']),
    checkPost (id) {
      this.$router.push({
        name: 'post',
        params: { id }
      })
    }
  }
}
</script>

<style scoped>
  table th button span {
    vertical-align: middle;
  }
</style>
