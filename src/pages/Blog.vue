<template>
  <Layout>
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
        cover_image
        tags {
          path
          id
          title
        }
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
  flex-wrap: wrap;
}

.post-listing-tags li {
  display: inline;
  padding:0.25rem;
  opacity: 0.8;
}
.post-listing-tags li:hover,.post-listing-tags li:focus {
    opacity: 1;
}

ul.post-listing-tags {
    text-align: right;
}

a.tag-link {
    text-decoration: none;

}
.post-listing-meta {
    text-align: right;
}

.post-listing-tags {
    text-align: right;
    margin: 0;
}
</style>
