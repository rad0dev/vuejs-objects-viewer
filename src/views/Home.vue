<template>
  <div class="home">
    <PostsViewer/>
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import PostsViewer from '@/components/PostsViewer'

export default {
  name: 'home',
  components: {
    PostsViewer
  }
}
</script>
