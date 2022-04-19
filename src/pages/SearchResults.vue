<template>
  <div class="q-pt-xl col text-center">
    <div class="text-center text-h5 q-pb-md">搜 索 结 果</div>
    <SearchBox/>
  </div>

  <div class="flex flex-center">
    <div class="q-pt-md q-gutter-y-lg">

      <div class="gt-xs q-gutter-lg q-mb-xl q-ml-xl">
        <q-btn outline label="所有" padding="0 40px"/>
        <q-btn outline label="产品" padding="0 40px"/>
        <q-btn outline label="案例" padding="0 40px"/>
        <q-btn outline label="新闻" padding="0 40px"/>
      </div>
      <div class="xs flex justify-around q-mb-lg">
        <q-btn outline label="所有" padding="0 20px"/>
        <q-btn outline label="产品" padding="0 20px"/>
        <q-btn outline label="案例" padding="0 20px"/>
        <q-btn outline label="新闻" padding="0 20px"/>
      </div>
      <div class="gt-xs q-gutter-xl row">
        <template v-for="x in 8">
          <ProductLCard/>
        </template>
      </div>
      <div class="xs flex flex-center q-gutter-y-md">
        <template v-for="x in 8">
          <ProductLCard :is-mobile="true"/>
        </template>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="black"
          :max="10"
          :max-pages="3"
          :boundary-numbers="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductLCard from "components/ProductLCard";
import SearchBox from "components/SearchBox";
export default {
  name: "SearchResult",
  components: {
    ProductLCard,
    SearchBox
  },
  data() {
    return {
      panel: 'all',
      current: 1,
    }
  }
}
</script>

<style scoped>

</style>
