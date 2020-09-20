<template lang='pug'>
#app
  Topbar
  .d-flex.flex-row-reverse.fixed-bottom.m-3
    //-a.btn.btn-primary(href='https://www.facebook.com/kramviTeam/' target='_blank')
      img.mr-2.mt-1(src='@/icons/facebook.svg' align='left' width='15')
    a.bg-success.rounded-circle(style='padding:.8rem' href='whatsapp://send?phone=+51930430929&text=Hola tengo una consulta' 
      v-if='isMobile()')
      img(src='@/icons/whatsapp.svg' align='left' width='40' height='40') 
    a.bg-success.rounded-circle(style='padding:.8rem' href='https://web.whatsapp.com/send?phone=51930430929&text=Hola tengo una consulta' 
      v-else target='_blank')
      img(src='@/icons/whatsapp.svg' align='left' width='40' height='40') 
  main(style='margin-top: 40px' role='main')
    <router-view/>
  Footer
</template>

<script>
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Topbar,
    Footer,
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

<style lang="scss">
@import "@/sass/app.scss";
</style>
