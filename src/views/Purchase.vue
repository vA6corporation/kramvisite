<template lang='pug'>
.container
  .pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center
    h1.display-4 Contratar
    p.lead
      | Elija el metodo de pago 
  .card-deck.mb-3
    .card.mb-4.shadow-sm
      .card-header
        h4.my-0.font-weight-normal.text-center Basico
      .card-body
        h1.card-title.pricing-card-title.text-center
          | S/ {{ ((50 * quantityBasic)-1) - (discount * (quantityBasic - 1))  }} 
          small.text-muted / me
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
            | Soporte Tecnico 24/7
          li.text-muted 
            feather.mr-2(type='x')
            | Boleta y factura electrónica
          li.text-muted
            feather.mr-2(type='x')
            | Ecommerce
        .form-group
          select.custom-select(v-model='quantityBasic')
            option(v-for='n in 5' :value='n') {{ n }} SUCURSAL
        button.btn.btn-lg.btn-block.btn-outline-primary(type='button') Contratar
  .pricing-header.px-3.mx-auto.text-center
    p.lead
      | No incluye certificado electronico
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      discount: 10,
      quantityBasic: 1,
      quantityPro: 1,
      quantityEcommerce: 1,
    }
  }
}
</script>
