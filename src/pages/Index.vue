<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
    <section class="greet">
      <div class="center-box">
        <h1>Hello!</h1>
      <p>
      I love playing with technology and I care about making the world a better place.
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
}

.center-box h1 {
  text-align: center;
}
</style>
