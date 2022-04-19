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
  <div class="page-width">
    <div class="q-pt-md">
      <div class="gt-xs grid">
        <template v-for="x in 6">
          <HomeNewsCard class="grid__item"/>
        </template>
      </div>
      <div class="xs q-gutter-y-md">
        <template v-for="x in 6">
          <HomeNewsCard :is-mobile="true"/>
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
