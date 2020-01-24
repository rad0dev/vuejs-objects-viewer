<template>
  <div class="home">
    <PostsTable />
  </div>
</template>

<script>
import PostsTable from '@/components/PostsTable'

export default {
  name: 'home',
  components: {
    PostsTable
  }
}
</script>
