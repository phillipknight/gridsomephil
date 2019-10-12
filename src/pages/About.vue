<template>
  <Layout>
    <main>
      <h1 class="side-padding">About me</h1>

      <section class="bio">
                  <g-image
            src="https://phillipkent.neocities.org/20190929_182036.jpg"
            alt="photo of the very dashing Phillip Kent Knight"
          />
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
section.bio {
  display: flex;
  align-content: center;
  justify-content: center;
}

.bio-name {
  margin-top: 0;
}
.bio-summary {
  flex-basis: 700px;
  padding: 1rem;
}

.category {
  color: grey;
}

.bio-stats {
  display: flex;
}

.side-padding {
  padding: 0 1rem;
}

.stats-and-links {
  padding: 1rem;
}

span.category {
  display: block;
  font-size: small;
}
</style>