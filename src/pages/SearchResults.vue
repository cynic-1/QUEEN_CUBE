<template>
  <div class="q-pt-xl col text-center">
    <SearchBox/>
  </div>

  <div style="display: flex; justify-content: center">
    <div class="q-pa-xl q-gutter-y-xl" style="max-width: 1400px;">
      <q-btn-toggle
        v-model="panel"
        inline
        rounded
        toggle-color="black"
        toggle-text-color="white"
        :options="[
            { label: '所有', value: 'all' },
            { label: '产品', value: 'products' },
            { label: '案例', value: 'examples' },
            { label: '新闻', value: 'news' }
          ]"
      />
      <div class="gt-xs q-gutter-xl row">
        <template v-for="x in 8">
          <ProductLCard/>
        </template>
      </div>
      <div class="xs q-gutter-xl">
        <template v-for="x in 8">
          <ProductLCard/>
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
      current: '',
    }
  }
}
</script>

<style scoped>

</style>
