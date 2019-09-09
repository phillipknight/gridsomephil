<template>
  <div class="post-list">
    <h1 class="title" v-html="post.title"/>
    <p class="date" v-html="post.date"/>
    <p class="description" v-html="post.description"/>
    <b>{{post.timeToRead}} min read</b> &nbsp;
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
    name:'PostListing',
    props: ["post"]
};
</script>

<style>
.post-list {
    width: 75vw;

}

.description {
    text-align: justify;
}
</style>