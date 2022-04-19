<template>
  <div>
    <video>
      <source src="../assets/video_1646475288583.mp4" type="video/mp4">
    </video>
  </div>
  <div class="gt-xs q-gutter-y-xl" style="margin-top: 60px;">
    <SolutionCard/>
    <SolutionCard :left="false"/>
  </div>
  <div class="xs q-gutter-y-sm">
    <SolutionCard/>
    <SolutionCard :left="false"/>
  </div>
</template>

<script>
import SolutionCard from "components/SolutionCard"
import productLCard from "components/ProductLCard"
export default {
  name: "ProjectList",
  data() {
    return {

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
