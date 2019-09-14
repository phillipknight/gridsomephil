<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <top-navigation></top-navigation>
      <toggle-theme></toggle-theme>
    </header>
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
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme
  }
}
</script>
<style>


body {
  --header-bg: #ff7e00;
  --header-link-color: #ffffff;
  --header-hover:#000000;
  --nav-bottom: #ff7e00;
  --nav-bottom-hover:#000000;
  --body-bg: #ffffff;
  --body-copy: #000000;

  
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
  --header-hover:#00ff4c;
  --nav-bottom: #00ff4c;
  --nav-bottom-hover:#000000;
  --body-bg: #000000;
  --body-copy: #ffffff;

}

.layout {
  margin: 0;
}

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

.nav {
  display: flex;
}
.nav__link {
  display: flex;
  margin-left: 0.5rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5rem solid var(--nav-bottom);
  box-sizing: border-box;
  padding: 0.5rem 0.25rem 0 0.25rem;
}

.nav__link:hover,
.nav__link:focus {
  border-bottom-color: var(--nav-bottom-hover);
  color: var(--header-hover);
}

.nav__link.active--exact,
.nav__link.active--exact:hover,
.nav__link.active--exact:focus {
  border-bottom-color: #000000;
  color: #ffffff;
  cursor: default;
  border-bottom: 0.5rem solid #ffffff;
}
</style>
