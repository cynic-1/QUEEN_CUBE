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
    <template v-for="(item, idx) of homeCarouselData">
      <q-carousel-slide :name="idx+1" :img-src="item.img">
        <div class="carousel-content">
          <div class="text-white text-h3 text-weight-bolder ">
            {{item.title[global.isChinese]}}
          </div>
          <div class="q-pt-md text-white text-h5">
            {{item.subtitle[global.isChinese]}}
          </div>
          <div class="q-pt-lg text-white q-gutter-md">
            <template v-for="it of item.btns">
              <q-btn outline :label="it.label[global.isChinese]" :to="it.link"/>
            </template>
          </div>

        </div>

      </q-carousel-slide>
    </template>
  </q-carousel>
</template>

<script>
import select from "../api/select";
export default {
  name: "HomeCarousel",
  props: {
    homeCarouselData: Array
  },
  data () {
    return {
      global: select.global,
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
