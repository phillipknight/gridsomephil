<template>
  <Layout>
    <p v-html="$page.metaData.siteDescription" />
    <section class="posts">
      <post-listing v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  },
  
  allBlogPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}

</page-query>

<script>
import PostListing from "~/components/PostListing.vue";

export default {
  components: {
    PostListing
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>

<style>
.posts {
  display: flex;
  padding: 1rem;
  flex-flow: column;
}
</style>
