<template>
  <div class="my-card" :class="{'my-card-mobile': isMobile}">
    <q-responsive :ratio="1">
      <q-img
        class="col cursor-pointer"
        :src="solutionCardData.img"
        style="border-radius:5%"
        img-class="img-hover"
      >
        <div class="solution-card-text">{{solutionCardData.label[global.isChinese]}}</div>
        <q-btn class="lower-btn" size="1.25rem" color="white" text-color="black"
               :label="solutionCardData.btn.label[global.isChinese]" :to="solutionCardData.btn.link"/>
      </q-img>
    </q-responsive>
  </div>
</template>

<script>
import select from "src/api/select";

export default {
  name: "HomeSolutionCard",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    solutionCardData: Object
  },
  data () {
    return {
      global: select.global,
      label: "智能家居",
      img: "https://cdn.quasar.dev/img/parallax2.jpg",
      btnLabel: "进入了解"
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 30vw
.my-card-mobile
  width: 80vw
  margin: 0 5vw 0 5vw
  .lower-btn
    width: 60vw
.lower-btn
  width: 20vw
  position: absolute
  bottom: 4vw
  left: 0
  right: 0
  margin-left: auto
  margin-right: auto
.solution-card-text
  position: absolute
  bottom: 4vw
  left: 0
  right: 0
  margin: 4rem auto
  background-color: unset
  text-align: center
  font-size: 2rem
  font-weight: bold
</style>
