<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class="greet snappy">
      <div class="center-box">
        <h1>Hi, I'm Phillip!</h1>
        <TypeWriter typewriterCopy="Welcome to my website (and thanks for visiting)..."></TypeWriter>
       

      </div>
    </section>
    <div class="svg-container" id="home1">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--body-bg)"
          fill-opacity="1"
          d="M0,96L30,101.3C60,107,120,117,180,106.7C240,96,300,64,360,42.7C420,21,480,11,540,16C600,21,660,43,720,58.7C780,75,840,85,900,90.7C960,96,1020,96,1080,128C1140,160,1200,224,1260,234.7C1320,245,1380,203,1410,181.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
      </svg>
    </div>
         
    <section class="home-block snappy" >


        <div class="center-box">
          <h2>Links</h2>
          <ul class="flexlist">
            <li><h3>Instagram</h3><p>things I want to show off</p></li>
            <li><h3>Twitter</h3><p>mostly just trying to stay positive</p></li>
            <li><h3>Facebook</h3><p>occasionally forgetting I hate facebook</p></li>
            <li><h3>LinkedIn</h3><p>getting down to business</p></li>
          </ul>
        </div>
    </section>
  </Layout>
</template>

<script>

import TypeWriter from "~/components/TypeWriter.vue";

export default {
  components: {
    TypeWriter
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.greet {
  display: flex;
  height: calc(100vh - 3rem);
  justify-content: center;
  align-items: center;
}

.center-box {
  width: 75vw;
  max-width: 100%;
  text-align: center;
}

.center-box h1 {
  text-align: center;
}

section.home-block {
  height: 100vh;
    background-color: var(--header-bg);
  color: var(--header-link-color)
}
#home1 {
  margin-bottom: -2rem;
  background-color: var(--header-bg);
  color: var(--header-link-color)
}

.snappy {
  scroll-snap-align: center;
}

.flexlist {
  display:flex;

}

.flexlist li {
  width:10rem;
}
</style>
