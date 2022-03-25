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
    class="gt-xs"
  >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
      <div class="carousel-block">
        <div class="text-white text-h3 text-weight-bolder ">
          主标题
        </div>
        <div class="q-pt-md text-white text-h5">
          副标题
        </div>
        <div class="q-pt-lg text-white q-gutter-md">
          <template v-for="x of 4">
            <q-btn outline label="btn1" icon-right="man"/>
          </template>
        </div>

      </div>

    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" >
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>

  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    class="xs"
    height="340px"
  >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
      <div class="carousel-block">
        <div class="text-white text-h5 text-weight-bolder ">
          主标题
        </div>
        <div class="text-white text-h6">
          副标题
        </div>
        <div class="q-pt-md text-white q-gutter-md">
          <template v-for="x of 4">
            <q-btn outline size="xs" label="btn1" icon-right="man"/>
            <template v-if="x % 2 === 0">
              <br>
            </template>
          </template>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" >
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
  bottom: 30%;
  left: 10%;
}
</style>
