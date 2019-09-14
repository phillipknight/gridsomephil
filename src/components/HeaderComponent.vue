<template>
 
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <top-navigation></top-navigation>     
    </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>

</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
  height: 3rem;
  margin-bottom: 20px;
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
