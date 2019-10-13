<template>
  <Layout>
    <main>
      <h1 class="side-padding">About me</h1>

      <section class="bio">
        <div class="bio-pic">
          <g-image
            src="https://phillipkent.neocities.org/20190929_182036.jpg"
            alt="photo of the very dashing Phillip Kent Knight"
            width="178"
            fit="cover"
          />
        </div>

        <div class="bio-summary">
          <h2>Technology and attempts to change the world are the only things that really hold my attention.</h2>
          <p>
            I’ve worked on campaigns ranging from municipal boards to United States Senate, and with organizations
            from small student groups to the largest LGBT nonprofit in the world. Every professional role I’ve had
            has been different, but my ambition and determination have always been the same: I’m motivated by moving
            the needle- seeing measurable change in a sometimes troubling world.
          </p>
          <p>
            I currently help campaigns and nonprofit organizations build and manage online technolgy, with a focus
            on connecting people with their leaders around the world. My past experience includes front-line field
            organizing, traditional communications, digital strategy, and a lifetime of nerding out with technology.
          </p>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--dark-grey)"
          fill-opacity="1"
          d="M0,128L0,0L205.7,0L205.7,96L411.4,96L411.4,288L617.1,288L617.1,128L822.9,128L822.9,32L1028.6,32L1028.6,256L1234.3,256L1234.3,32L1440,32L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"
        />
      </svg>
      <div class="about-photos"></div>

      <section class="employment-highlights"></section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About me"
  }
};
</script>
<style>
main {
  display: grid;
}

.bio-name {
  margin-top: 0;
}
.bio-summary {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
}

.side-padding {
  padding: 0 1rem;
}

.about-photos {
  height: 50vh;
  background-color: var(--dark-grey);
}
</style>