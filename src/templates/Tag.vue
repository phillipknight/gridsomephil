<template>
  <Layout>
    <h1 class="tag-title"># {{ $page.tag.title }}</h1>

    <div class="posts">
      <post-listing v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on BlogPost {
            title
            path
            date (format: "D MMMM YYYY")
            timeToRead
            description
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostListing from "~/components/PostListing.vue"
export default {
  components: {
    PostListing
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    };
  }
};

</script>
