<template>
  <q-page class="flex">
    <div class="col">
      <HomeCarousel/>
      <div class="q-gutter-y-xl q-py-xl">
        <ProductCard :left="false"/>
        <ProductCard/>
        <HomeSearch/>
        <div class="text-center text-h4 text-weight-bolder">解决方案</div>
        <div class="flex justify-around">
          <template v-for="x in 3">
            <HomeSolutionCard/>
          </template>
        </div>
        <div class="flex justify-around">
          <template v-for="x in 4">
            <HomeNewsCard/>
          </template>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeCarousel from "components/HomeCarousel";
import HomeSearch from "components/HomeSearch";
import ProductCard from "components/ProductCard";
import HomeSolutionCard from "components/HomeSolutionCard";
import HomeNewsCard from "components/HomeNewsCard";

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeCarousel,
    HomeSearch,
    ProductCard,
    HomeSolutionCard,
    HomeNewsCard
  }
})
</script>
