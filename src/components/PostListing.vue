<template>
  <div class="post-list">
    <!--  <g-image v-if="post.cover_image" :src="post.cover_image" width="600" height="300"/> -->
    <div class="post-header" :style="{ backgroundImage: `url('${post.cover_image}')` }">
      <div class="title-and-date">
        <h1 class="title">{{post.title}}</h1>
      </div>
    </div>
    <div class="post-content">
    <div class="date">{{post.date}}</div>

      <p class="description">{{ post.description }}</p>
      <div class="post-navigation">
        <g-link :to="post.path" class="button">Read More</g-link>
        <div class="post-listing-meta">
          <small>{{post.timeToRead}} min read</small>
          <ul class="post-listing-tags">
            <li v-for="tag in post.tags" :key="tag.id" class="tag-listed">
              <g-link :to="tag.path" class="tag-link">#{{ tag.title }}</g-link>
            </li>
          </ul>
        </div>
      </div>
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




</style>