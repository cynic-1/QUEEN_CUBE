<template>
    <q-card class="my-card bg-grey-3" :class="{'my-card-mobile': isMobile}" bordered flat>
      <q-img
        class="col cursor-pointer"
        :src="image"
        style="border-radius: 8px"
        img-class="img-hover"
        @click="jumpTo"
      />

      <q-card-section class="items-center my-text-1vw">
        <div class="my-little-card-title">{{ title }}</div>
        <div class="flex flex-center">
<!--          {{ content }}-->
          <q-chip outline :label="content" style="width: 90%; margin: 10px 0;"/>
          <q-btn no-wrap class="justify-center text-weight-bold" label="了 解 详 情" :to="link" outline push style="width: 90%"/>
        </div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: "ProductLCard",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: "KNX毅系列面板",
      content: "3 种颜色可选（深空灰/玫瑰金...)",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      link: ""
    }
  },
  methods: {
    jumpTo() {
      this.$router.push(this.link)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 12vw
  border-radius: 8px
  flex-shrink: 0
  min-width: 160px
.my-card-mobile
  width: 60vw
  .my-little-card-title
    font-size: 1.25rem
.my-little-card-title
  padding-top: 10%
  padding-bottom: 10%
  text-align: center
.my-text-1vw
  font-size: 1vw

</style>
