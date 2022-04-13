<template>
  <HeaderImage/>
  <div class="q-ml-lg q-mt-lg q-gutter-lg">
    <template v-for="x in 3">
      <q-btn outline label="产品线" size="1.25rem" padding="0 40px"/>
    </template>
    <q-tabs
      v-model="tab"
      align="left"
    >
      <q-tab name="software" label="软件"/>
      <q-tab name="panel" label="面板/底座" />
      <q-tab name="XXX" label="XXX" />
      <q-tab name="XXXX" label="XXXX" />
    </q-tabs>
    <div class="q-gutter-y-lg">
      <template v-for="x in 4">
        <ProductListCard/>
      </template>
    </div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import ProductListCard from "components/ProductListCard";

export default {
  name: "ProductList",
  components: {
    HeaderImage,
    ProductListCard
  },
  data() {
    return {
      tab: "software",

    }
  }
}
</script>

<style scoped>

</style>
