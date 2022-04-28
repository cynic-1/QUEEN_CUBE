<template>
  <q-tabs align="left" class="q-px-xl q-py-md" v-model="tab">
    <template v-for="item of solutionTabs">
      <q-tab :name="item.label[0]" class="tabs" @click="jumpTo(item.label[0])">
        {{item.label[global.isChinese]}}
      </q-tab>
    </template>
  </q-tabs>
  <video controls>
    <source :src="videoSrc" type="video/mp4">
  </video>
<!--  <video controls="" autoplay="" name="media"><source src="http://47.103.152.187:8000/media/resolution_video/7a349e9843896981ea1fda8172071f24_jOud2d4.mp4" type="video/mp4"></video>-->
  <SeparatorBlock/>
  <div class="page-width">
    <div class="q-pt-md">
      <div class="gt-xs grid">
        <template v-for="item of homeNewsCardData">
          <HomeNewsCard class="grid__item" :home-news-card-data="item"/>
        </template>
      </div>
      <div class="xs flex flex-center q-gutter-y-md">
        <template v-for="item of homeNewsCardData">
          <HomeNewsCard :is-mobile="true" :home-news-card-data="item"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNewsCard from "components/HomeNewsCard";
import api from "src/api/api";
import select from "src/api/select"
import SeparatorBlock from "components/SeparatorBlock";

export default {
  name: "SolutionDetail",
  components: {
    HomeNewsCard,
    SeparatorBlock
  },
  data() {
    return {
      tab: "",
      global: select.global,
      solutionTabs: [
        {
          label: ['fdsfas', '智慧办公'],
          link: "commercial"
        },
      ],
      videoSrc: "",
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
    this.getSolutionTabs()
    // this.getSolutionDetail()
  },
  methods: {
    async getSolutionDetail() {
      let res = await api.getSolutionDetail(this.tab)
      if (res.data.code === 0 && res.status === 200) {
        // this.solutions = res.data.data.solutions
        this.videoSrc = res.data.data.videoSrc
        this.homeNewsCardData = res.data.data.homeNewsCardData
        document.querySelector('video').load()
      }
    },
    async getSolutionTabs() {
      let res = await api.getSolutionTabs()
      if (res.data.code === 0 && res.status === 200) {
        this.solutionTabs = res.data.data.solutionTabs
        this.tab = this.$route.params.name || this.solutionTabs[0].label[0]
      }
    },
    jumpTo(item) {
      this.$router.push('/solutions/'+item)
    },
  },
  watch:{
    tab() {
      this.getSolutionDetail()
    },
    '$route': function () {
      this.tab = this.$route.params.name
    }
  }
}
</script>

<style lang="sass" scoped>
.tabs
  font-size: 1.25rem
video
  width: 100%
  height: 40vh
  object-fit: fill
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
