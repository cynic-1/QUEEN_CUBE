<template>
  <q-card class="raw bg-grey-3 my-card" flat square style="border-radius:5% 5% 5% 5%" @mouseover="start" @mouseleave="end">
    <q-responsive :ratio="3" style="border-radius:0 5% 5% 0">
      <q-card-section horizontal style="border-radius:5% 5% 5% 5%">
        <q-img
          class="col-4 cursor-pointer"
          :src="images[index]"
          img-class="img-hover"
          style="border-radius:5% 0 0 5%"
        />
        <q-card-section class="col-8">
          <div class="my-card-content">
            <div class="my-title text-weight-bolder text-h6" style="margin-top: 1%">{{ name }}</div>
            <q-btn no-wrap class="justify-center" outline push style="width: 20%;margin-top: 3%" size="xs">型号型号</q-btn>
            <div style="white-space: pre-wrap; margin-top: 3%" >
              {{ describe }}
            </div>
            <div style="margin-top: 3%;margin-left: -11%;" >
              <q-btn icon="fa-solid fa-arrow-left" style="float:left;margin-top:5%" flat></q-btn>
              <q-btn icon="fa-solid fa-arrow-right" style="float:right;margin-top:5%;margin-right: 1%" flat></q-btn>
              <span v-for="(im, index) in images" :key="index" class="q-gutter-md">
                <q-img
                  class="cursor-pointer img-responsive"
                  :src="im"
                  :ratio="1"
                  img-class="img-hover"
                  @click="changeImage(index)"
                />
              </span>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-responsive>
  </q-card>
</template>

<script>
export default {
  name: "ProductListCard",
  data() {
    return {
      slide: 1,
      timer: '',
      index: 0,
      name: '产品名称',
      describe: '- 产品参数\n' +
        '- 产品参数\n' +
        '- 产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数\n' +
        ' 产品参数产品参数产品参数',
      images: ['https://cdn.quasar.dev/img/parallax2.jpg', 'https://cdn.quasar.dev/img/parallax2.jpg', 'https://cdn.quasar.dev/img/parallax2.jpg', 'https://cdn.quasar.dev/img/parallax2.jpg', 'https://cdn.quasar.dev/img/parallax2.jpg']
    }
  },
  methods: {
    changeImage(index) {
      this.index = index
    },
    autoChangeImage() {
      if (this.images && this.images.length > 0) {
        this.index = (this.index + 1) % this.images.length
      }
    },
    start() {
      this.timer = setInterval(() => {
        this.autoChangeImage()
      }, 8000)
    },
    end() {
      clearInterval(this.timer);
      this.timer = ''
    },
  },
}
</script>

<style lang="sass" scoped>
.my-card
  margin-right: 10%
  margin-left: 10%

.my-card-content
  margin: 0 5% 0 13%

.img-responsive
  width: 14%
  float: left
</style>
