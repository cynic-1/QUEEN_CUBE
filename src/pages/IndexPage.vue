<template>
  <q-page class="flex">
    <div class="col">
      <HomeCarousel/>
      <div class="q-gutter-y-xl q-py-xl">
        <ProductCard :left="false"/>
        <ProductCard/>
      </div>
      <HomeSearch/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeCarousel from "components/HomeCarousel";
import HomeSearch from "components/HomeSearch";
import ProductCard from "components/ProductCard";

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeCarousel,
    HomeSearch,
    ProductCard
  }
})
</script>
