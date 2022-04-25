<template>
    <q-card class="my-card cursor-pointer" :class="{'my-card-mobile': isMobile}" bordered flat @click="jumpTo">
      <q-img
        class="col"
        :src="productLittleCardData.img"
        style="border-radius: 8px 8px 0 0"
        img-class="img-hover"
      />

      <q-card-section class="items-center my-text-1vw">
        <div class="my-little-card-title">{{ productLittleCardData.title[global.isChinese] }}</div>
        <div class="flex flex-center">
<!--          {{ content }}-->
          <q-chip outline style="width: 90%; margin: 10px 0; min-width: 140px; padding: 10px 20%;">
            <div style="margin: auto">{{productLittleCardData.content[global.isChinese]}}</div>
          </q-chip>
          <template v-if="isDownload">
            <template v-if="productLittleCardData.handbook.length && productLittleCardData.driver.length">
              <q-btn-group outline push class="justify-center text-weight-bold" style="width: 90%;">
                <q-btn no-wrap outline push :label="guidebook" :to="productLittleCardData.handbook" padding="10px 20%"/>
                <q-btn no-wrap outline push :label="driver" :to="productLittleCardData.driver" padding="10px 20%"/>
              </q-btn-group>
            </template>
            <template v-else-if="productLittleCardData.handbook.length">
              <q-btn no-wrap outline push :label="guidebookDownload" :to="productLittleCardData.handbook" style="width: 90%"/>
            </template>
            <template v-else-if="productLittleCardData.driver.length">
              <q-btn no-wrap outline push :label="driverDownload" :to="productLittleCardData.driver" style="width: 90%"/>
            </template>
          </template>
          <template v-else>
            <q-btn no-wrap class="justify-center text-weight-bold" :label="learnMore" :to="productLittleCardData.link" outline push style="width: 90%"/>
          </template>
        </div>
      </q-card-section>
    </q-card>
</template>

<script>
import select from "src/api/select";

export default {
  name: "ProductLCard",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    isDownload: {
      type: Boolean,
      default: false
    },
    productLittleCardData: Object
  },
  data () {
    return {
      global: select.global,
      title: "KNX毅系列面板",
      content: "3 种颜色可选（深空灰/玫瑰金...)",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      link: "",
      handbook: "撒旦发射点发射点",
      driver: "123"
    }
  },
  methods: {
    jumpTo() {
      this.$router.push(this.link)
    }
  },
  computed: {
    learnMore() {
      return this.global.isChinese ? "了 解 更 多" : "Learn More"
    },
    driver() {
      return this.global.isChinese ? "驱 动" : "Driver"
    },
    driverDownload() {
      return this.global.isChinese ? "驱 动 下 载" : "Download Driver"
    },
    guidebook() {
      return this.global.isChinese ? "手 册" : "GuideBook"
    },
    guidebookDownload() {
      return this.global.isChinese ? "手 册 下 载" : "Download Guidebook"
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 18vw
  border-radius: 8px
  flex-shrink: 0
  min-width: 160px
.my-card-mobile
  width: 80vw
.my-little-card-title
  font-size: 1.25rem
  padding-top: 10%
  padding-bottom: 10%
  text-align: center
.my-text-1vw
  font-size: 1vw
.q-chip__content
  .ellipsis
    margin: auto
</style>
