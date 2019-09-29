<template>
  <div class="post-list">

    <g-image v-if="post.cover_image" :src="post.cover_image" />
    <h1 class="title">{{post.title}}</h1>
    <div class="date">{{post.date}}</div>
    <p class="description" >
      {{ post.description }}
    </p>
    <g-link :to="post.path" class="button">Read More</g-link>
    <div class="post-listing-meta">
      <small> {{post.timeToRead}} min read</small>
      <ul class="post-listing-tags">
      <li v-for="tag in post.tags" :key="tag.id" class="tag-listed">
        <g-link :to="tag.path" class="tag-link">#{{ tag.title }}</g-link>
      </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PostListing",
  props: ["post"]
};
</script>

<style>
.post-list {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    border-radius: 1rem;
    padding: 1rem 1rem 0 1rem;
}

.title {
  grid-column: 1/1;
  align-self: center;
  justify-self: left;
}


</style>