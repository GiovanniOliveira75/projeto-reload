<template>
  <div id="header" class="animated fadeInDown">
    <header class="header container">
      <div class="img-header">
        <img src="https://via.placeholder.com/80" alt />
      </div>
      <div class="nav-header">
        <nav class="nav">
          <div class="router-links">
            <router-link class="link" to="/">Página Inicial</router-link>
            <router-link class="link" to="/about">Sobre Nós</router-link>
            <router-link class="link" to="/contact">Contato</router-link>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header {
    z-index: 1;
}

header {
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link {
  margin-left: 15px;
}
</style>