<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
    <section class="greet">
      <div class="center-box">
        <h1>Hello World!</h1>
      <p>
        Welcome to my new website based on my old website.
      </p>
      <p>
        <em>This is a work in progress</em>
      </p>
      </div>
      
    </section>




  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

.greet {
  display: flex;
  height: calc(100vh - 6rem);
  justify-content:center;
  align-items: center;
}

.center-box {
  width:75vw;
  max-width:100%;
  text-align: center;
}

.center-box h1 {
  text-align: center;
}
</style>
