<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
      <div class="gt-xs text-white text-h3 text-weight-bolder carousel-block">QUEENCUBE 1</div>
      <div class="xs text-white text-h5 text-weight-bolder carousel-block">QUEENCUBE 1</div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" >
      <div class="gt-xs text-white text-h3 text-weight-bolder carousel-block">QUEENCUBE 1</div>
      <div class="xs text-white text-h5 text-weight-bolder carousel-block">QUEENCUBE 1</div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>
</template>

<script>
export default {
  name: "HomeCarousel",
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<style scoped>
.carousel-block {
  position: absolute;
  bottom: 40%;
  left: 10%;
}
</style>
