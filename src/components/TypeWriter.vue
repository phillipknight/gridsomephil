<template>
 
<div class="typewriter">
    <p>{{typewriterCopy}} thing</p>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  name: 'TypeWriter',
  props: ['typewriterCopy'],
}
</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
  height: 3rem;
  font-family: sans-serif;
  background-color: var(--header-bg);
  color: var(--header-link-color);
}
.header a {
  color: var(--header-link-color);
  text-decoration: none;
  text-transform: lowercase;
}




</style>


