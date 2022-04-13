<template>
  <q-card class="my-card">
    <q-img :src="image" style="max-height: 25vw;"/>
    <div class="my-card-content">
      <div class="my-title">{{title}}</div>
      <div>{{date}}</div>
      <div>{{text}}</div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "NewsListCard",
  data() {
    return {
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      title: "华为推出新一代全屋智能解决方案,智能家居行业PK再升级",
      date: "2022年4月3日",
      text: "据住建部等部门此前发布的《关于加快发展数字家庭 提高居住品质的指导意见》，到2025年底，构建比较完备的数字家庭标准体系；" +
        "新建全装修住宅和社区配套设施，全面具备通信连接能力，拥有必要的智能产品；既有住宅和社区配套设施，拥有一定的智能产品，数字化改造初…"
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 80vw
  text-align: center
  margin-left: auto
  margin-right: auto
  padding-bottom: 10px
.my-card-mobile
  width: 39vw
.my-card-content
  margin: 3% 8% 5% 8%
  > *
    margin-top: 3%
.my-title
  font-size: 1.5rem
</style>
