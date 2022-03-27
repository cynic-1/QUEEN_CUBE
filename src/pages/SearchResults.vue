<template>
  <div class="gt-xs q-pt-xl col text-center">
    <SearchBox/>
  </div>
  <div class="q-pa-xl q-gutter-y-md">
    <q-option-group
      v-model="panel"
      inline
      :options="[
          { label: '所有', value: 'all' },
          { label: '产品', value: 'products' },
          { label: '案例', value: 'examples' },
          { label: '新闻', value: 'news' }
        ]"
    />

    <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
      <q-tab-panel name="all">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="products">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="examples">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="news">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
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
    }
  }
}
</script>

<style scoped>

</style>
