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
          <q-chip outline :label="productLittleCardData.content[global.isChinese]" style="margin: 10px 0;"/>
          <template v-if="isDownload">
            <template v-if="productLittleCardData.handbook.length && productLittleCardData.driver.length">
              <q-btn-group outline push class="justify-center text-weight-bold">
                <q-btn no-wrap outline push label="手 册" :to="handbook" padding="10px 2.5rem"/>
                <q-btn no-wrap outline push label="驱 动" :to="driver" padding="10px 2.5rem"/>
              </q-btn-group>
            </template>
            <template v-else-if="productLittleCardData.handbook.length">
              <q-btn no-wrap outline push label="手 册 下 载" :to="productLittleCardData.handbook" style="width: 90%"/>
            </template>
            <template v-else-if="productLittleCardData.driver.length">
              <q-btn no-wrap outline push label="驱 动 下 载" :to="productLittleCardData.driver" style="width: 90%"/>
            </template>
          </template>
          <template v-else>
            <q-btn no-wrap class="justify-center text-weight-bold" label="了 解 详 情" :to="productLittleCardData.link" outline push style="width: 90%"/>
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
  width: 60vw
.my-little-card-title
  font-size: 1.25rem
  padding-top: 10%
  padding-bottom: 10%
  text-align: center
.my-text-1vw
  font-size: 1vw

</style>
