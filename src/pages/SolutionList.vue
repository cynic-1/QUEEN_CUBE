<template>
  <div>
    <video>
      <source :src="videoSrc" type="video/mp4">
    </video>
  </div>
  <div class="gt-xs q-gutter-y-xl" style="margin-top: 60px;">
    <template v-for="(item,idx) of solutionCardData">
      <SolutionCard :left="idx%2===0" :solution-card-data="item"/>
    </template>
  </div>
  <div class="xs q-gutter-y-sm">
    <template v-for="(item,idx) of solutionCardData">
      <SolutionCard :left="idx%2===0" :solution-card-data="item"/>
    </template>
  </div>
</template>

<script>
import api from "src/api/api";
import select from "src/api/select";
import SolutionCard from "components/SolutionCard"
import productLCard from "components/ProductLCard"
export default {
  name: "ProjectList",
  data() {
    return {
      global: select.global,
      videoSrc: "",
      solutionCardData: [
        {
          title : "智能家居",
          content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
            "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          title : "智能家居",
          content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
            "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          title : "智能家居",
          content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
            "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          title : "智能家居",
          content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
            "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
      ]
    }
  },
  components: {
    SolutionCard,
    productLCard,
  },
  methods: {
    async getSolutionLists() {
      let res = await api.getSolutionLists(this.tab, this.subtab, this.current)
      if (res.data.code === 0 && res.status === 200) {
        this.videoSrc = res.data.data.videoSrc
        this.solutionCardData = res.data.data.solutionCardData
      }
    },
  },
  created() {
    this.getSolutionLists()
  }
}
</script>

<style scoped>
video {
  width: 100%;
  height: 40vh;
  object-fit: fill;
}
</style>
