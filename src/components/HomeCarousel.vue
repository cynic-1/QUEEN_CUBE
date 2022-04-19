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
    class="carousel-block"
  >
    <template v-for="x in 4">
      <q-carousel-slide :name="x" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="carousel-content">
          <div class="text-white text-h3 text-weight-bolder ">
            主标题
          </div>
          <div class="q-pt-md text-white text-h5">
            副标题
          </div>
          <div class="q-pt-lg text-white q-gutter-md">
            <template v-for="x of 4">
              <q-btn outline label="btn1"/>
            </template>
          </div>

        </div>

      </q-carousel-slide>
    </template>
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

<style lang="sass" scoped>
@media (max-device-width: 600px)
  .carousel-block
    height: 300px

.carousel-content
  position: absolute
  bottom: 30%
  left: 10%
</style>
