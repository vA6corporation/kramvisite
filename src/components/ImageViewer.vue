<template lang="pug">
.canvas-viewer(v-if='src')
  | PICHULA
  img.img-fluid(src='@/assets/midBanner3.png' style='object-fit: cover')
</template>

<script>
export default {
  props: ['src']
}
</script>

<style>
.canvas-viewer {
  opacity: 0.5;
  position: fixed;
  /* right: 0; */
  left: 0;
  top: 0;
  /* bottom: 0; */
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: #000;
  /* overflow: hidden; */
}
</style>