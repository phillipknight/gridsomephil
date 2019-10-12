<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <article>
      <g-image :src="$page.post.cover_image" width="500" />
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: blogPost (id: $id) {
    title
    date
    published
    series
    cover_image
    canonical_url
    description
    content

  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
<style>
article {
  padding: 1rem;
}
</style>
