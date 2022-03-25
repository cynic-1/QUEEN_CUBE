<template>
  <q-page class="flex">
    <div class="col">
      <HomeCarousel/>
      <HomeSearch/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeCarousel from "components/HomeCarousel";
import HomeSearch from "components/HomeSearch";

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeCarousel,
    HomeSearch
  }
})
</script>
