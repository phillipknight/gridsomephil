<template>
  <div class="layout">
    <header-component></header-component>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
import HeaderComponent from '~/components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>
<style>


body {
  --header-bg: #ff7e00;
  --header-link-color: #ffffff;
  --header-hover:#000000;
  --nav-bottom: var(--header-bg);
  --nav-bottom-hover:#0a0a0a;
  --body-bg: #ffffff;
  --body-copy: #000000;
  --link: #ff7e00;

  
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--body-bg);
  color: var(--body-copy)
}

body[data-theme="dark"] {
  --header-bg: #353535;
  --header-link-color: #ffffff;
  --header-hover:#ff7e00;
  --nav-bottom: var(--header-bg);
  --nav-bottom-hover:#ff7e00;
  --body-bg: #000000;
  --body-copy: #ffffff;
  --link: #ff7e00;

}

a {
 color: var(--link);
}

.button {
  border: 1px solid var(--link);
  padding: 0.5rem;
  text-decoration: none;
  opacity: 0.8;
  text-align: center;
  max-width: 50%;
}
.button:hover, .button:focus {
  opacity: 1;
}
.layout {
  margin: 0;
}

img {
  max-width: 100%;
}
</style>
