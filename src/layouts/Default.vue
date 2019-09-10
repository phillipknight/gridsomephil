<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <top-navigation></top-navigation>
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

<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
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
  background-color: #ff7e00;
  color: #ffffff;
}
.header a {
  color: #ffffff;
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
  border-bottom: 0.5rem solid #ff7e00;
  box-sizing: border-box;
  padding: 0.5rem 0.25rem 0 0.25rem;
}

.nav__link:hover,
.nav__link:focus {
  border-bottom-color: #000000;
  color: #000000;
}

.nav__link.active--exact,
.nav__link.active--exact:hover,
.nav__link.active--exact:focus {
  border-bottom-color: #000000;
  color: #ffffff;
}
</style>
