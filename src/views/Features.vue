<template lang="pug">
.container
  .pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center
    h1.display-4 Caracteristicas
    p.lead
      | Todo lo que necesita para gestionar su negocio o empresa, logistica, inventario, cuentas por cobrar y mucho mas.
  .card-deck.mb-3
    table.table.table-bordered
      thead.text-center
        tr
          td(style='border-top: 2px solid white; border-left: 2px solid white;')
          td(style='border-top: 2px solid white; border-left: 2px solid white;')
          th.table-success RECOMENDADO
          th(style='border-top: 2px solid white; border-right: 2px solid white;')
        tr
          th
          th(style='width:10rem') BASICO
          th(style='width:10rem') ESTANDAR
          th(style='width:10rem') ECOMMERCE
      tbody
        tr
          td Punto de venta, Tiendas, Minimarkets, Restaurantes y Hoteles
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Productos e Inventario
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Reportes en linea
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Deudas por cobrar y Pagar
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Proformas
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Clientes, consulta con SUNAT y RENIEC
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Kardex de productos
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Cuentas de usuarios multiples
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Sucursales multiples
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Puntos de venta multiples
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Envio automatico de comprobantes electronicos
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Factura y Boleta de venta electronica
          td.text-center
            feather.text-muted(stroke-width='5' type='x')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Notas de credito
          td.text-center
            feather.text-muted(stroke-width='5' type='x')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Comunicacion de baja
          td.text-center
            feather.text-muted(stroke-width='5' type='x')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Guias de remision
          td.text-center
            feather.text-muted(stroke-width='5' type='x')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
        tr
          td Tienda virtual
          td.text-center
            feather.text-muted(stroke-width='5' type='x')
          td.text-center
            feather.text-muted(stroke-width='5' type='x')
          td.text-center
            feather.text-success(stroke-width='5' type='check')
</template>

<style scoped>
.container {
  max-width: 900px;
}
</style>