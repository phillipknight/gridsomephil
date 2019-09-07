<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <top-navigation></top-navigation>
    <slot/>
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
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
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
.nav__link {
  margin-left: 20px;
}
</style>
