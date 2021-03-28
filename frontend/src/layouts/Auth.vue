<template>
  <div class="root q-gutter-y-md">
    <q-btn class="full-width" style="max-width: 300px;" flat to="/"><div class="root__item text-h3">Pachanga</div></q-btn>
    <div class="root__item">
      <router-view></router-view>
    </div>
    <div class="bg" :style="{ backgroundImage: `url(${background})` }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: require("../assets/bg.jpg"),
    };
  },
};
</script>

<style scoped>
.bg{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: .05;
  filter: grayscale(100%);
}
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.root__item {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>