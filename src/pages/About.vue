<template>
  <Layout>
    <main>
      <h1>About me</h1>
      <div class="bio-photo">
        <g-image
          src="https://phillipkent.neocities.org/20190929_182036.jpg"
          alt="photo of the very dashing Phillip Kent Knight"
        />
      </div>
      <section class="bio">
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
      <section class="bio-stats">
        <div class="stats-and-links">
          <h2>Phillip Kent Knight</h2>
          <table>
            <tr>
              <td class="category">Specialty:</td>
              <td>Online Advocacy Technology</td>
            </tr>
            <tr>
              <td class="category">Hometown:</td>
              <td>El Segundo, California</td>
            </tr>
            <tr>
              <td class="category">Home, now:</td>
              <td>Washington, District of Columbia</td>
            </tr>
          </table>
         <!--  <div class="social-icons">
            <ul class="social-buttons">
              <li>
                <a href="https://dev.to/phillipkent">
                  <img
                    src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                    alt="Phillip Kent Knight's DEV Profile"
                    height="30"
                    width="30"
                  />
                </a>
              </li>
            </ul>
          </div> -->
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
  display: grid;
  grid-template-columns: 25% auto 25%;
}

.bio-summary {
  grid-column-start: 2;
}

.category {
  color: grey;
}

.bio-stats {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>