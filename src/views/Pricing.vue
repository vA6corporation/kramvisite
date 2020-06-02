<template lang='pug'>
.container
  .pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center
    h1.display-4 Precios
    p.lead
      | Elija el plan que mas se acomode a su empresa 
  .card-deck.mb-3
    .card.mb-4.shadow-sm
      .card-header
        h4.my-0.font-weight-normal.text-center Basico
      .card-body
        h1.card-title.pricing-card-title.text-center
          | S/ {{ ((50 * quantityBasic)-1) - (discount * (quantityBasic - 1))  }} 
          small.text-muted / me
        .text-center
          small.text-muted No incluye IGV
        ul.list-unstyled.mt-3.mb-4
          li
            feather.mr-2(type='check')
            | Punto de venta
          li 
            feather.mr-2(type='check')
            | Control de inventario
          li 
            feather.mr-2(type='check')
            | Reportes de venta
          li 
            feather.mr-2(type='check')
            | Usuarios iliminados
          li
            feather.mr-2(type='check')
            | Soporte tecnico 24/7
          li.text-muted 
            feather.mr-2(type='x')
            | Boleta y factura electrónica
          li.text-muted
            feather.mr-2(type='x')
            | Tienda virtual
        .form-group
          select.custom-select(v-model='quantityBasic')
            option(v-for='n in 5' :value='n') {{ n }} SUCURSAL
        a.btn.btn-lg.btn-block.btn-outline-primary(href='whatsapp://send?phone=+51922537926&text=Hola quiero contratar Kramvi'
          v-if='isMobile()') 
          | Contratar 
        a.btn.btn-lg.btn-block.btn-outline-primary(href='https://web.whatsapp.com/send?phone=51922537926&text=Hola quiero contratar Kramvi' 
          v-else target='_blank') 
          | Contratar 
    .card.mb-4.shadow-sm
      .card-header.text-center
        h4.my-0.font-weight-normal Estandar
      .card-body
        h1.card-title.pricing-card-title.text-center
          | S/ {{ ((80 * quantityPro) - 1) - (discount * (quantityPro - 1))  }} 
          small.text-muted / me
        .text-center
          small.text-muted No incluye IGV
        ul.list-unstyled.mt-3.mb-4
          li
            feather.mr-2(type='check')
            | Punto de venta
          li 
            feather.mr-2(type='check')
            | Control de inventario
          li 
            feather.mr-2(type='check')
            | Reportes de venta
          li 
            feather.mr-2(type='check')
            | Usuarios iliminados
          li
            feather.mr-2(type='check')
            | Soporte tecnico 24/7
          li
            feather.mr-2(type='check')
            | Boleta y factura electrónica
          li.text-muted
            feather.mr-2(type='x')
            | Tienda virtual
        .form-group
          select.custom-select(v-model='quantityPro')
            option(v-for='n in 5' :value='n') {{ n }} SUCURSAL
        a.btn.btn-lg.btn-block.btn-outline-primary(href='whatsapp://send?phone=+51922537926&text=Hola quiero contratar Kramvi'
          v-if='isMobile()') 
          | Contratar 
        a.btn.btn-lg.btn-block.btn-outline-primary(href='https://web.whatsapp.com/send?phone=51922537926&text=Hola quiero contratar Kramvi' 
          v-else target='_blank') 
          | Contratar 
    .card.mb-4.shadow-sm
      .card-header
        h4.my-0.font-weight-normal.text-center Ecommerce
      .card-body
        h1.card-title.pricing-card-title.text-center
          | S/ {{ ((100 * quantityEcommerce)-1) - (discount * (quantityEcommerce - 1))  }} 
          small.text-muted / me
        .text-center
          small.text-muted No incluye IGV
        ul.list-unstyled.mt-3.mb-4
          li
            feather.mr-2(type='check')
            | Punto de venta
          li 
            feather.mr-2(type='check')
            | Control de inventario
          li 
            feather.mr-2(type='check')
            | Reportes de venta
          li 
            feather.mr-2(type='check')
            | Usuarios iliminados
          li
            feather.mr-2(type='check')
            | Soporte tecnico 24/7
          li
            feather.mr-2(type='check')
            | Boleta y factura electrónica
          li
            feather.mr-2(type='check')
            | Tienda virtual
        .form-group
          select.custom-select(v-model='quantityEcommerce')
            option(v-for='n in 5' :value='n') {{ n }} SUCURSAL
        a.btn.btn-lg.btn-block.btn-outline-primary(href='whatsapp://send?phone=+51922537926&text=Hola quiero contratar Kramvi'
          v-if='isMobile()') 
          | Contratar 
        a.btn.btn-lg.btn-block.btn-outline-primary(href='https://web.whatsapp.com/send?phone=51922537926&text=Hola quiero contratar Kramvi' 
          v-else target='_blank') 
          | Contratar 
  .pricing-header.px-3.mx-auto.text-center
    p.lead
      | No incluye certificado electronico
</template>

<script>
export default {
  data() {
    return {
      discount: 10,
      quantityBasic: 1,
      quantityPro: 1,
      quantityEcommerce: 1,
    }
  },
  methods: {
    isMobile() { 
      if ( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 969px;
}
</style>