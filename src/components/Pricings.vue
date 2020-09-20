<template lang="pug">
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
      a.btn.btn-lg.btn-block.btn-outline-primary(href='whatsapp://send?phone=+51930430929&text=Hola quiero contratar Kramvi'
        v-if='isMobile()') 
        | Contratar 
      a.btn.btn-lg.btn-block.btn-outline-primary(href='https://web.whatsapp.com/send?phone=51930430929&text=Hola quiero contratar Kramvi' 
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
      a.btn.btn-lg.btn-block.btn-outline-primary(href='whatsapp://send?phone=+51930430929&text=Hola quiero contratar Kramvi'
        v-if='isMobile()') 
        | Contratar 
      a.btn.btn-lg.btn-block.btn-outline-primary(href='https://web.whatsapp.com/send?phone=51930430929&text=Hola quiero contratar Kramvi' 
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
      a.btn.btn-lg.btn-block.btn-outline-primary(href='whatsapp://send?phone=+51930430929&text=Hola quiero contratar Kramvi'
        v-if='isMobile()') 
        | Contratar 
      a.btn.btn-lg.btn-block.btn-outline-primary(href='https://web.whatsapp.com/send?phone=51930430929&text=Hola quiero contratar Kramvi' 
        v-else target='_blank') 
        | Contratar 
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
}
</script>