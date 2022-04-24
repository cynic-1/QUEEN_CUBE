<template>
  <div class="q-pt-xl col text-center">
    <div class="text-center text-h5 q-pb-md">搜 索 结 果</div>
    <SearchBox @search="getSearchResults($event, 'all', 1)"/>
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
        <template v-for="item of homeNewsCardData">
          <HomeNewsCard class="grid__item" :home-news-card-data="item"/>
        </template>
      </div>
      <div class="xs flex flex-center q-gutter-y-md">
        <template v-for="item of productLittleCardData">
          <ProductLCard :is-mobile="true" :product-little-card-data="item"/>
        </template>
        <template v-for="item of homeNewsCardData">
          <HomeNewsCard :home-news-card-data="item"/>
        </template>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="black"
          :max="10"
          :max-pages="maxPage"
          :boundary-numbers="true"
          :to-fn="page => ({query: page})"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductLCard from "components/ProductLCard";
import SearchBox from "components/SearchBox";
import api from "src/api/api";
import HomeNewsCard from "components/HomeNewsCard";
export default {
  name: "SearchResult",
  components: {
    HomeNewsCard,
    ProductLCard,
    SearchBox
  },
  data() {
    return {
      panel: 'all',
      current: 1,
      maxPage: 3,
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
      ],
      // 新闻和案例都是一样的数据，不区分
      // 在搜索页里，如果选择所有，则会同时出现两种小卡，加起来8个
      homeNewsCardData: [
        {
          title: "华为推出新一代全屋智能解决方案,智能家居行业PK再升级",
          content: "据住建部等部门此前发布的《关于加快发展数字家庭 提高居住品质的指导意见》，到2025年底，" +
            "构建比较完备的数字家庭标准体系；新建全装修住宅和社区配套设施，全面具备通信连接能力，拥有必要的智能产品；" +
            "既有住宅和社区配套设施…",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          date: "2022年4月3日",
          link: ""
        },
        {
          title: "华为推出新一代全屋智能解决方案,智能家居行业PK再升级",
          content: "据住建部等部门此前发布的《关于加快发展数字家庭 提高居住品质的指导意见》，到2025年底，" +
            "构建比较完备的数字家庭标准体系；新建全装修住宅和社区配套设施，全面具备通信连接能力，拥有必要的智能产品；" +
            "既有住宅和社区配套设施…",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          date: "2022年4月3日",
          link: ""
        },
        {
          title: "华为推出新一代全屋智能解决方案,智能家居行业PK再升级",
          content: "据住建部等部门此前发布的《关于加快发展数字家庭 提高居住品质的指导意见》，到2025年底，" +
            "构建比较完备的数字家庭标准体系；新建全装修住宅和社区配套设施，全面具备通信连接能力，拥有必要的智能产品；" +
            "既有住宅和社区配套设施…",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          date: "2022年4月3日",
          link: ""
        },
        {
          title: "华为推出新一代全屋智能解决方案,智能家居行业PK再升级",
          content: "据住建部等部门此前发布的《关于加快发展数字家庭 提高居住品质的指导意见》，到2025年底，" +
            "构建比较完备的数字家庭标准体系；新建全装修住宅和社区配套设施，全面具备通信连接能力，拥有必要的智能产品；" +
            "既有住宅和社区配套设施…",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          date: "2022年4月3日",
          link: ""
        }
      ]
    }
  },
  created() {
    this.getSearchResults()
  },
  methods: {
    // category: 'all', 'product', 'solution', 'news'
    async getSearchResults(word, category, page) {
      let res = await api.getSearchResults(word, category, page)
      if (res.data.code === 0 && res.status === 200) {
        this.productLittleCardData = res.data.data.productLittleCardData
        this.homeNewsCardData = res.data.data.homeNewsCardData
        this.maxPage = res.data.data.maxPage
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
    margin: 0 0.75rem 1.5rem 0.75rem
</style>
