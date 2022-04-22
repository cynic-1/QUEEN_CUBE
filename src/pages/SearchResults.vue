<template>
  <div class="q-pt-xl col text-center">
    <div class="text-center text-h5 q-pb-md">搜 索 结 果</div>
    <SearchBox/>
  </div>

  <div class="page-width">
    <div class="q-pt-md q-gutter-y-lg">

      <div class="gt-xs q-gutter-lg q-mb-xl" style="padding-left: 0.75rem;">
        <q-btn outline label="所有" padding="0 40px"/>
        <q-btn outline label="产品" padding="0 40px"/>
        <q-btn outline label="案例" padding="0 40px"/>
        <q-btn outline label="新闻" padding="0 40px"/>
      </div>
      <div class="xs flex justify-around q-mb-lg">
        <q-btn outline label="所有" padding="0 20px"/>
        <q-btn outline label="产品" padding="0 20px"/>
        <q-btn outline label="案例" padding="0 20px"/>
        <q-btn outline label="新闻" padding="0 20px"/>
      </div>
      <div class="gt-xs grid">
        <template v-for="item of productLittleCardData">
          <ProductLCard class="grid__item" :product-little-card-data="item"/>
        </template>
      </div>
      <div class="xs flex flex-center q-gutter-y-md">
        <template v-for="item of productLittleCardData">
          <ProductLCard :is-mobile="true" :product-little-card-data="item"/>
        </template>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="black"
          :max="10"
          :max-pages="3"
          :boundary-numbers="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductLCard from "components/ProductLCard";
import SearchBox from "components/SearchBox";
import api from "src/api/api";
export default {
  name: "SearchResult",
  components: {
    ProductLCard,
    SearchBox
  },
  data() {
    return {
      panel: 'all',
      current: 1,
      // 需要请求
      productLittleCardData: [
        {
          title: "KNX毅系列面板",
          content: "3 种颜色可选（深空灰/玫瑰金...)",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          link: "",
          handbook: "撒旦发射点发射点",
          driver: "123"
        },
        {
          title: "KNX毅系列面板",
          content: "3 种颜色可选（深空灰/玫瑰金...)",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          link: "",
          handbook: "撒旦发射点发射点",
          driver: "123"
        },
        {
          title: "KNX毅系列面板",
          content: "3 种颜色可选（深空灰/玫瑰金...)",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          link: "",
          handbook: "撒旦发射点发射点",
          driver: "123"
        },
      ]
    }
  },
  created() {
    this.productLittleCardData()
  },
  methods: {
    async productLittleCardData() {
      let res = await api.productLittleCardData()
      if (res.data.code === 0 && res.status === 200) {
        this.productLittleCardData = res.data.data.productLittleCardData
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@media (min-device-width: 600px)
  .page-width
    padding: 0 10vw
  .grid
    display: flex
    flex-wrap: wrap
    padding: 0
    list-style: none
  .grid__item
    width: calc(25% - 1.5rem)
    margin: auto 0.75rem 1.5rem 0.75rem
</style>
