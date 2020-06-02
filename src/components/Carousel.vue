<template lang='pug'>
#carousel.carousel.slide(data-ride='carousel')
  ol.carousel-indicators
    li.active(data-target='#carousel', data-slide-to='0')
    li(data-target='#carousel', data-slide-to='1')
    li(data-target='#carousel', data-slide-to='2')
  .carousel-inner
    .carousel-item.active
      img(src='@/assets/banner1.png' style='object-fit: cover')
      .container
        .carousel-caption.text-left
          h1.banner1 
            | FACTURACION ELECTRONICA 
            br
            | FACIL
          p.subheader
            | Sistema de facturacion electronica y punto de venta, 
            br
            | inventario, kardes y mucho mas.
          p
            router-link.btn.btn-lg.btn-primary(to='/pricing') Contratar
    .carousel-item
      img(src='@/assets/banner2.jpg' style='object-fit: cover')
      .container
        .carousel-caption
          h1.banner2 DESARROLLO DE SOFTWARE
          p.shadow-text
            | Sistemas a medida para su empresa, pida una cotizacion.
          p
            a.btn.btn-lg.btn-primary(href='https://web.whatsapp.com/send?phone=51922537926&text=Hola tengo una consulta' target='_blank') 
              | Cotizar 
    .carousel-item
      img(src='@/assets/banner3.png' style='object-fit: cover')
      .container
        .carousel-caption.text-right
          h1.banner1 KRAMVI
          p.subheader
            | Nuestra solucion para facturacion electronica
            br 
            | actuzalizaciones constantes con SUNAT.
          p
            a.btn.btn-lg.btn-primary(href='https://kramvi.com/login', role='button') Ingresar
  a.carousel-control-prev(href='#carousel', role='button', data-slide='prev')
    span.carousel-control-prev-icon(aria-hidden='true')
    span.sr-only Previous
  a.carousel-control-next(href='#carousel', role='button', data-slide='next')
    span.carousel-control-next-icon(aria-hidden='true')
    span.sr-only Next
</template>

<style scoped>
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

.shadow-text {
  /* text-align: left;  */
  /* font-family: Arial;  */
  /* font-size: 30px;  */
  /* COLOR: #1278BF;  */
  text-shadow: 0px 0px 9px #000000;
}

.subheader {
  color: #8ca7d1;
}

h1.banner1 {
  color: #1c3780;
  font-weight: 900;
  /* text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000; */
}

h1.banner2 {
  color: #ffffff;
  font-weight: 900;
  /* text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000; */
}

h1.banner3 {
  color: #ff0000;
  font-weight: 900;
  /* text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000; */
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
  height: 38rem;
}

.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 38rem;
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