<template lang='pug'>
div
  image-viewer(:src='src')
  carousel
  .container.marketing
    //-MidBanners
      //-hr.featurette-divider
    .row.featurette
      .col-md-7
        h2.featurette-heading
          | Punto de Venta. 
          span.text-muted De facil uso.
        p.lead
          | Contamos con punto de venta para Minimarkets, Restaurantes, Boticas, Hoteles, Ferreterias.
      a.col-md-5(href='#' @click='src = `@/assets/midBanner1.png`')
        img.img-fluid(src='@/assets/midBanner1.png')
    hr.featurette-divider
    .row.featurette
      .col-md-7.order-md-2
        h2.featurette-heading
          | Inventario en Tiempo Real. 
          span.text-muted Desde cualquier parte.
        p.lead
          | No importa donde te encuentres siempre obtendras el reporte de tu inventario en linea.
      .col-md-5.order-md-1
        img.img-fluid(src='@/assets/midBanner2.png' style='object-fit: cover')
    hr.featurette-divider
    .row.featurette
      .col-md-7
        h2.featurette-heading
          | Reporte de Ventas. 
          span.text-muted Por Meses, productos y mas.
        p.lead
          | Toma las mejores decisiones con los reportes en tiempo real ventas del dia, la recudacion total, productos mas vendidos entre otros.
      .col-md-5
        img.img-fluid(src='@/assets/midBanner3.png' style='object-fit: cover')
    hr.featurette-divider
    .row.featurette
      .col-md-7
        h2.featurette-heading
          | Envio automatico a SUNAT. 
          span.text-muted Facturas, Boletas, Guias de Remision.
        p.lead
          | Sientase tranquilo por la validez de sus comprobantes de pagos, todos son enviados automaticamente a SUNAT.
      .col-md-5
        img.img-fluid(src='@/assets/midBanner4.png' style='object-fit: cover')
    hr.featurette-divider
    h4.text-muted.text-center Contamos con el respaldo de:
    br
    br
    br
    br
    br
    .form-row.text-center
      .col
        img.grayscale(src='@/assets/footBanner1.png' width='300')
      .col
        img.grayscale(src='@/assets/footBanner2.png' width='300')
      .col
        img.grayscale.mt-3(src='@/assets/footBanner3.png' width='300')
    //-hr.featurette-divider
    br
    br
    br
    br
    br
    br
</template>

<script>
import Carousel from '@/components/Carousel'
import MidBanners from '@/components/MidBanners'
import ImageViewer from '@/components/ImageViewer'


export default {
  components: {
    MidBanners,
    Carousel,
    ImageViewer,
  },
  data() {
    return {
      src: null,
    }
  }
}
</script>

<style scoped>
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

.grayscale {
  filter: grayscale(100%);
}

.grayscale:hover {
  /* background-color: yellow; */
  filter: grayscale(0%);
}

.container {
  max-width: 1300px;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>