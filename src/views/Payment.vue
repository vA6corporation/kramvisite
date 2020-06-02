<template lang='pug'>
.container
  .pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center
    h1.display-4 Renovacion de Suscripcion
    p.lead
      | Comuniquese con el soporte tecnico +51922537926
</template>

<script>

export default {
  mounted() {
    this.$http.get().then(res => {
      console.log(res);
      
    });
  },
  data() {
    return {
      business: {},
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 969px;
}
</style>