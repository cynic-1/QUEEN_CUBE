<template>
  <div class="q-pt-xl col text-center">
    <div class="text-center text-h5 q-pb-md">搜 索 结 果</div>
    <SearchBox/>
  </div>

  <div class="page-width">
    <div class="q-pt-md q-gutter-y-lg">

      <div class="gt-xs q-gutter-lg q-mb-xl" style="padding-left: 0.75rem;">
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
      <div class="gt-xs grid">
        <template v-for="x in 8">
          <ProductLCard class="grid__item"/>
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

<style lang="sass" scoped>
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
