<template>
  <div style="width: 30vw;">
    <q-responsive :ratio="1">
      <q-img
        class="col cursor-pointer"
        :src="image"
        style="border-radius:5%"
        img-class="img-hover"
      >
        <q-btn class="lower-btn" size="1.25rem" color="white" text-color="black" :label="btnLabel"/>
      </q-img>
    </q-responsive>
  </div>
</template>

<script>
export default {
  name: "HomeSolutionCard",
  data () {
    return {
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      btnLabel: "进入了解"
    }
  }
}
</script>

<style lang="sass" scoped>
.lower-btn
  width: 20vw
  position: absolute
  bottom: 4vw
  left: 0
  right: 0
  margin-left: auto
  margin-right: auto
</style>
