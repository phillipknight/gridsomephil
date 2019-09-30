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

.title-and-date {
  padding: 0.5rem;
  background: var(--opaque-bg);
  border-radius: 0.25rem;
  width: fit-content;
}
.date {
  font-size: small;
  font-style: italic;
}
.post-header {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.post-list {
  flex-basis: 600px;
  flex-grow: 1;
}

.post-listing-tags li {
  display: inline;
  padding: 0.25rem;
  opacity: 0.8;
}
.post-listing-tags li:hover,
.post-listing-tags li:focus {
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
