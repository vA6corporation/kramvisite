<template lang="pug">
//-.d-flex.flex-column.flex-md-row.align-items-center.p-3.px-md-4.mb-3.bg-white.border-bottom.shadow-sm
  h5.my-0.mr-md-auto.font-weight-normal
    //- img(src='@/assets/kramviLogo-240x240.svg' width='50', height='50') 
    | Kramvi
  nav.my-2.my-md-0.mr-md-3
    router-link.p-2.text-dark(to='/features') Caracteristicas
    //- a.p-2.text-dark(href='https://getbootstrap.com/docs/4.4/examples/pricing/#') Enterprise
    //- a.p-2.text-dark(href='https://getbootstrap.com/docs/4.4/examples/pricing/#') Support
    router-link.p-2.text-dark(to='/pricing') Precios
  a.btn.btn-outline-danger(href='https://kramvi.com/login') Ingresar
header
  nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-dark
    router-link.navbar-brand(to='/home') Kramvi
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarCollapse', aria-controls='navbarCollapse', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarCollapse.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item(:class='{ active: $route.name == `home` }')
          router-link.nav-link(to='/home') Inicio 
        li.nav-item(:class='{ active: $route.name == `features` }')
          router-link.nav-link(to='/features') Caracteristicas
        li.nav-item(:class='{ active: $route.name == `pricing` }')
          router-link.nav-link(to='/pricing') Precios
        li.nav-item
          a.nav-link(href='https://consulta.kramvi.com' target='_blank') Consultar CDR
      ul.navbar-nav.mt-2.mt-md-0
        //-li.nav-item(:class='{ active: $route.name == `register` }')
          router-link.nav-link(to='/register') Registrarse
        a.btn.btn-outline-danger.my-2.my-sm-0(href='https://kramvi.com/login') 
          | Ingresar 
          feather(type='log-in')
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.name);
  }
}
</script>