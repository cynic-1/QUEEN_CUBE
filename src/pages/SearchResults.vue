<template>
  <div class="q-pt-xl col text-center">
    <div class="text-center text-h5 q-pb-md">{{SearchResults}}</div>
    <SearchBox/>
  </div>

  <div class="page-width">
    <div class="q-pt-md q-gutter-y-lg">

      <div class="gt-xs q-gutter-lg q-mb-xl" style="padding-left: 0.75rem;">
        <q-btn outline :label="All" padding="0 40px" @click="panel='all'"
               :class="{'bg-grey': panel==='all'}"/>
        <q-btn outline :label="Product" padding="0 40px" @click="panel='product'"
               :class="{'bg-grey': panel==='product'}"/>
        <q-btn outline :label="Solution" padding="0 40px" @click="panel='solution'"
               :class="{'bg-grey': panel==='solution'}"/>
        <q-btn outline :label="News" padding="0 40px" @click="panel='news'"
               :class="{'bg-grey': panel==='news'}"/>
      </div>
      <div class="xs flex justify-around q-mb-lg">
        <q-btn outline :label="All" padding="0 20px" @click="panel='all'"
               :class="{'bg-grey': panel==='all'}"/>
        <q-btn outline :label="Product" padding="0 20px" @click="panel='product'"
               :class="{'bg-grey': panel==='product'}"/>
        <q-btn outline :label="Solution" padding="0 20px" @click="panel='solution'"
               :class="{'bg-grey': panel==='solution'}"/>
        <q-btn outline :label="News" padding="0 20px" @click="panel='news'"
               :class="{'bg-grey': panel==='news'}"/>
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
          <HomeNewsCard :is-mobile="true" :home-news-card-data="item"/>
        </template>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="black"
          :max="maxPage"
          :max-pages="5"
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
import select from "src/api/select"
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
      global: select.global,
      panel: 'all',
      current: 1,
      maxPage: 3,
      word: this.$route.query.word || "",
      // 需要请求
      productLittleCardData: [
        {
          title: "",
          content: "",
          img: "",
          link: "",
          handbook: "",
          driver: ""
        },
      ],
      // 新闻和案例都是一样的数据，不区分
      // 在搜索页里，如果选择所有，则会同时出现两种小卡，加起来8个
      homeNewsCardData: [
        {
          title: "",
          content: "",
          img: "",
          date: "",
          link: ""
        },
      ]
    }
  },
  created() {
    this.getSearchResults()
  },
  methods: {
    // category: 'all', 'product', 'solution', 'news'
    async getSearchResults() {
      let res = await api.getSearchResults(this.word, this.panel, this.current)
      if (res.data.code === 0 && res.status === 200) {
        this.productLittleCardData = res.data.data.productLittleCardData
        this.homeNewsCardData = res.data.data.homeNewsCardData
        this.maxPage = res.data.data.maxPage
      }
    },
  },
  watch: {
    current() {
      this.getSearchResults()
    },
    panel() {
      this.getSearchResults()
    },
    word() {
      this.getSearchResults()
    },
    '$route': function () {
      this.word = this.$route.query.word
    }
  },
  computed: {
    SearchResults() {
      return this.global.isChinese ? "搜 索 结 果" : "Search Results"
    },
    All() {
      return this.global.isChinese ? "所有" : "All"
    },
    Product() {
      return this.global.isChinese ? "产品" : "Product"
    },
    Solution() {
      return this.global.isChinese ? "案例" : "Solution"
    },
    News() {
      return this.global.isChinese ? "新闻" : "News"
    }
  }
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
