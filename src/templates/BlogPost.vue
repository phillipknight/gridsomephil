<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: blogPost (id: $id) {
    title
    content
  }
}
</page-query>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
