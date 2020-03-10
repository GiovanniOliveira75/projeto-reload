<template>
  <div id="footer">
    <footer class="footer">
      <div class="content-footer">
        <p class="text-footer">Todos os direitos reservados - Reload</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "Footer"

}
</script>

<style scoped>
footer {
  position: relative;
  width: 100vw;
  height: 50px;
  background-color: black;
}

.content-footer {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.text-footer {
    color: white;
    margin: 0;
}


</style>