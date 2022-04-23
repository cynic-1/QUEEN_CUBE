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
import SolutionCard from "components/SolutionCard"
import productLCard from "components/ProductLCard"
export default {
  name: "ProjectList",
  data() {
    return {
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
