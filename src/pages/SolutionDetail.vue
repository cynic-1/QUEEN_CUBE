<template>
  <q-tabs align="left" class="q-px-xl q-py-md" v-model="tab">
    <template v-for="item of solutions">
      <q-route-tab :to="item.link" :name="item.link" class="tabs">
        {{item.chinese}}
      </q-route-tab>
    </template>
  </q-tabs>
  <div>
    <video controls>
<!--      <source src="../assets/video_1646475288583.mp4" type="video/mp4">-->
    </video>
  </div>
  <div style="display: flex; justify-content: center">
    <div class="q-pa-xl q-gutter-y-xl" style="max-width: 90vw;">
      <div class="gt-xs q-gutter-xl row">
        <template v-for="x in 6">
          <HomeNewsCard/>
        </template>
      </div>
      <div class="xs q-gutter-xl">
        <template v-for="x in 6">
          <HomeNewsCard/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNewsCard from "components/HomeNewsCard";

export default {
  name: "SolutionDetail",
  components: {
    HomeNewsCard
  },
  data() {
    return {
      tab: "commercial",
      solutions: [
        {
          chinese: "智慧建筑",
          english: "",
          link: "commercial"
        },
        {
          chinese: "智慧办公",
          english: "",
          link: "office"
        },
        {
          chinese: "XXXX",
          english: "",
          link: "XXXX"
        },
        {
          chinese: "XXXXX",
          english: "",
          link: "XXXXX"
        }
      ]
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

</style>
