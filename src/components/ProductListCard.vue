<template>
  <q-card class="gt-xs raw my-card" flat @mouseover="start" @mouseleave="end">
    <q-responsive :ratio="3" >
      <q-card-section horizontal >
        <q-carousel
          animated
          v-model="slide"
          infinite
          class="col-4 cursor-pointer"
          style="border-radius: 30px 0 0 30px"
          :autoplay="isHover"
        >
            <template v-for="(item, idx) of productListCardData.imgs">
              <q-carousel-slide :name="idx+1" :img-src="item" />
            </template>
        </q-carousel>
        <q-card-section class="col-8">
          <div class="my-card-content">
            <div class="my-title text-weight-bolder text-h6" style="margin-top: 1%">{{ productListCardData.name[global.isChinese] }}</div>
            <q-btn no-wrap class="justify-center" outline push style="width: 20%;margin-top: 3%" size="xs">型号型号</q-btn>
            <div style="white-space: pre-wrap; margin-top: 3%" >
              {{ productListCardData.describe[global.isChinese] }}
            </div>
            <div style="margin-top: 3%;margin-left: -11%;" >

              <q-btn @click="clickLeft" icon="fa-solid fa-arrow-left" style="float:left;margin-top:5%" flat/>
              <q-btn @click="clickRight" icon="fa-solid fa-arrow-right" style="float:right;margin-top:5%;margin-right: 1%" flat></q-btn>

              <span v-for="(im, idx) in shownImages" :key="idx" class="q-gutter-md">
                <q-img
                  class="img-responsive"
                  :src="im"
                  :ratio="1"
                  img-class="img-hover"
                  @click="changeImage(idx)"
                  :class="{'selected-img': index+idx === slide-1}"
                />
              </span>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-responsive>
  </q-card>
  <div class="xs" @mouseover="start" @mouseleave="end" style="display: flex">
    <q-card class="raw my-card-mobile" flat>
      <q-responsive :ratio="0.5" >
        <q-card-section class="no-padding">
          <q-responsive :ratio="1">
            <q-carousel
              animated
              v-model="slide"
              infinite
              class="col-4 cursor-pointer"
              style="border-radius: 30px 30px 0 0"
              :autoplay="isHover"
            >
              <template v-for="(item, idx) of productListCardData.imgs">
                <q-carousel-slide :name="idx+1" :img-src="item" />
              </template>
            </q-carousel>
          </q-responsive>
          <q-card-section class="col-8">
            <div class="my-card-content">
              <div class="my-title text-weight-bolder text-h6" style="margin-top: 1%">{{ productListCardData.name[global.isChinese] }}</div>
              <q-btn no-wrap class="justify-center" outline push style="width: 60%;margin-top: 10%" size="xs">型号型号</q-btn>
              <div style="white-space: pre-wrap; margin-top: 10%" >
                {{ productListCardData.describe[global.isChinese] }}
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-responsive>
    </q-card>
    <div class="column no-wrap my-mobile-images" style="margin: 0 15px;">
      <q-btn icon="fa-solid fa-arrow-up" flat></q-btn>

        <template v-for="(im, index) in shownImages" :key="index" >
          <q-img
            class="img-responsive"
            :src="im"
            :ratio="1"
            img-class="img-hover"
            @click="changeImage(index)"
            style="width: 100%; margin: 10px 0;"
          />
        </template>

      <q-btn icon="fa-solid fa-arrow-down" flat></q-btn>

    </div>
  </div>
</template>

<script>
import select from "src/api/select";

export default {
  name: "ProductListCard",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    productListCardData: Object
  },
  data() {
    return {
      global: select.global,
      slide: 1,
      index: 0,
      name: '产品名称',
      describe: '- 产品参数\n' +
        '- 产品参数\n' +
        '- 产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数\n' +
        ' 产品参数产品参数产品参数',
      images: ['https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg",
        'https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg",
        'https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg"],
      isHover: false
    }
  },
  methods: {
    changeImage(index) {
      this.slide = index+1
    },
    autoChangeImage() {
      if (this.images && this.images.length > 0) {
        this.index = (this.index + 1) % this.images.length
      }
    },
    start() {
      // this.timer = setInterval(() => {
      //   this.autoChangeImage()
      // }, 8000)
      this.isHover = true
    },
    end() {
      // clearInterval(this.timer);
      // this.timer = ''
      this.isHover = false
    },
    clickLeft() {
      if (this.index > 0) this.index--;
    },
    clickRight() {
      if (this.index+5 < this.images.length) this.index++;
    }
  },
  computed: {
    shownImages() {
      return this.productListCardData.imgs.slice(this.index, this.index+5)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  margin-right: 10%
  margin-left: 10%
  border-radius: 30px
  min-width: 1200px
  &:hover
    border: 2px black solid
.selected-img
  border: 2px black solid
.my-card-mobile
  border-radius: 30px
  width: 60vw
  &:hover
    border: 2px black solid
.my-card-content
  margin: 0 5% 0 13%
.my-mobile-images
  width: 20vw
.img-responsive
  width: 14%
  float: left
</style>
