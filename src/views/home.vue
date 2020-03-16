<template>
  <div>
    <section id="hero" class="'hero">
      <div class="content-hero">
        <div class="box-content">
          <h1>LOREM BETTER.FASTER. TOGETHER.</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</h4>
          <div>
            <button>
              <i>Play</i>
            </button>
            <button>Get Started - Free Forever</button>
          </div>
        </div>
      </div>
    </section>

    <main class="container">
      <section id="section-1" class="section-1">
        <div class="texts-1">
          <h1 class="title-section">Vision Cloud</h1>
          <h3
            class="subtitle-section-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</h3>
        </div>
        <div class="img-1">
          <img src="https://via.placeholder.com/800x400" alt />
        </div>
      </section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to left top,
    #bc2feb,
    #ff00a9,
    #ff3668,
    #ff7f32,
    #f6b511
  );
}

.content-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
}

.section-1 {
  text-align: center;
  padding: 50px;
}

.title-section {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bolder;
}

.subtitle-section-3 {
  font-size: 25px;
  margin-bottom: 30px;
  font-weight: bolder;
}
</style>