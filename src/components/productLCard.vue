<template>
    <q-card class="my-card bg-grey-3" bordered flat>
      <q-img
        class="col"
        :src="image"
        style="border-radius: 5% 5% 5% 5%"
      />
      <q-responsive :ratio="1">
      <q-card-section class="items-center">
        <div class="text-h6 text-center q-py-xl">{{ title }}</div>
        <div class="flex flex-center">
<!--          {{ content }}-->
          <q-chip outline :label="content" style="width: 90%"/>
          <q-btn class="justify-center q-px-xl q-py-md q-mt-md text-weight-bold" label="了 解 详 情" outline push style="width: 90%"/>
        </div>
      </q-card-section>
      </q-responsive>
    </q-card>
</template>

<script>
export default {
  name: "productLCard",
  data () {
    return {
      title: "KNX毅系列面板",
      content: "3 种颜色可选（深空灰/玫瑰金...)",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  border-radius: 5% 5% 5% 5%
</style>
