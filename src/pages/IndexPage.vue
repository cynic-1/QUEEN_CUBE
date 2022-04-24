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
          <q-btn color="black" to="news" size="1.25rem" label="查看所有新闻" />
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
      solutionText: ['description', "简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要" +
      "介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍"],
      homeCarouselData: [{
        title: ['title', "主标题"],
        subtitle: ['subtitle', "副标题"],
        btns: [
          {
            label: ["btn1", '按钮1'],
            link: ""
          },
          {
            label: ["btn1", '按钮1'],
            link: ""
          },
          {
            label: ["btn1", '按钮1'],
            link: ""
          },
        ]
      },
        {
          title: "主标题",
          subtitle: "副标题",
          btnLabels: [
            "btn1","btn2","btn3","btn4"
          ]
        },],
      productCardData: [
        {
          title : "智能家居",
          subtitle : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
            "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
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
        },
        {
          title : "智能家居",
          subtitle : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
            "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
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
        },
      ],
      solutionCardData: [
        {
          label: "智能家居",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          btn: {
            label: "进入了解",
            link: ""
          }
        },
        {
          label: "智能家居",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          btn: {
            label: "进入了解",
            link: ""
          }
        },
        {
          label: "智能家居",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          btn: {
            label: "进入了解",
            link: ""
          }
        }
      ],
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
