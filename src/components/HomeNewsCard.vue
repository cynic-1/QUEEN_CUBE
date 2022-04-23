<template>
  <q-card class="my-card cursor-pointer" :class="{'my-card-mobile': isMobile}" bordered flat @click="jumpTo">
    <q-img
      class="col"
      :src="homeNewsCardData.img"
      style="border-radius: 8px 8px 0 0"
      img-class="img-hover"
    />
    <div class="q-gutter-y-md q-px-lg">
      <div class="l-title q-pt-lg">
        {{homeNewsCardData.title[global.isChinese]}}
      </div>
      <div>{{homeNewsCardData.date}}</div>
      <div class="l-content q-pb-lg">
        {{homeNewsCardData.content[global.isChinese]}}
      </div>
    </div>
  </q-card>

</template>

<script>
import select from "src/api/select";

export default {
  name: "HomeNewsCard",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    homeNewsCardData: Object
  },
  data () {
    return {
      global: select.global,
      title: "华为推出新一代全屋智能解决方案,智能家居行业PK再升级",
      content: "据住建部等部门此前发布的《关于加快发展数字家庭 提高居住品质的指导意见》，到2025年底，" +
        "构建比较完备的数字家庭标准体系；新建全装修住宅和社区配套设施，全面具备通信连接能力，拥有必要的智能产品；" +
        "既有住宅和社区配套设施…",
      img: "https://cdn.quasar.dev/img/mountains.jpg",
      date: "2022年4月3日",
      link: ""
    }
  },
  methods: {
    jumpTo() {
      this.$router.push(this.homeNewsCardData.link)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 18vw
  border-radius: 8px
  flex-shrink: 0
  min-width: 240px
.my-card-mobile
  width: 80vw
  margin: 0 5vw
.l-title
  font-size: 1.25rem
  font-weight: bolder
  white-space: normal
.l-content
  font-size: 1rem
  white-space: normal
</style>
