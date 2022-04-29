<template>
  <q-page class="flex">
    <div class="col">
      <HomeCarousel :home-carousel-data="homeCarouselData"/>
      <div class="q-gutter-y-xl q-py-xl">
        <template v-for="(item,idx) of productCardData">
          <ProductCard :left="idx % 2 === 0" :product-card-data="item"/>
        </template>
        <HomeSearch/>
        <div class="text-center text-h4 text-weight-bolder">解决方案</div>
        <div class="text-center text-h6" style="margin: 2em 10vw;">{{solutionText[global.isChinese]}}</div>
        <div class="gt-xs flex justify-around">
          <template v-for="item of solutionCardData">
            <HomeSolutionCard :solution-card-data="item"/>
          </template>
        </div>
        <div class="xs x-scroll">
          <template v-for="item of solutionCardData">
            <HomeSolutionCard :is-mobile="true" :solution-card-data="item"/>
          </template>
        </div>
        <div class="gt-xs flex justify-around q-pt-xl">
          <template v-for="item of homeNewsCardData">
            <HomeNewsCard :home-news-card-data="item"/>
          </template>
        </div>
        <div class="xs x-scroll">
          <template v-for="item of homeNewsCardData">
            <HomeNewsCard :is-mobile="true" :home-news-card-data="item" style="margin: auto 20px;"/>
          </template>
        </div>
        <div class="text-center q-pt-xl">
          <q-btn color="black" to="news" size="1.25rem" :label="viewAll" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeCarousel from "components/HomeCarousel";
import HomeSearch from "components/HomeSearch";
import ProductCard from "components/ProductCard";
import HomeSolutionCard from "components/HomeSolutionCard";
import HomeNewsCard from "components/HomeNewsCard";
import api from "src/api/api";
import select from "src/api/select";

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeCarousel,
    HomeSearch,
    ProductCard,
    HomeSolutionCard,
    HomeNewsCard
  },
  data() {
    return {
      global: select.global,
      solutionText: ['', ''],
      homeCarouselData: [{
        title: ['', ""],
        subtitle: ['', ""],
        img: "",
        btns: [
          {
            label: ["", ''],
            link: ""
          },
        ]
      },],
      productCardData: [
        {
          title : "",
          subtitle : "",
          img: "",
          productLittleCardData: [
            {
              title: "",
              content: "",
              img: "",
              link: "",
              handbook: "",
              driver: ""
            },
          ]
        },
      ],
      solutionCardData: [
        {
          label: "",
          img: "",
          btn: {
            label: "",
            link: ""
          }
        },
      ],
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
    this.getIndexPage()
  },
  methods: {
    async getIndexPage() {
      let res = await api.getIndexPage()
      if (res.data.code === 0 && res.status === 200) {
        this.solutionText = res.data.data.solutionText
        this.homeCarouselData = res.data.data.homeCarouselData
        this.productCardData = res.data.data.productCardData
        this.solutionCardData = res.data.data.solutionCardData
        this.homeNewsCardData = res.data.data.homeNewsCardData
      }
    },
  },
  computed: {
    viewAll() {
      return this.global.isChinese ? "查 看 所 有" : "View All"
    }
  }
})
</script>

<style lang="sass" scoped>
.x-scroll
  width: auto
  display: flex
  justify-content: space-between
  overflow-x: scroll
  white-space: nowrap
  &::-webkit-scrollbar
    display: none
  > *
    flex-shrink: 0
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
