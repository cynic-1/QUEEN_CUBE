<template>
  <q-page class="flex">
    <div class="col">
      <HomeCarousel/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeCarousel from "components/HomeCarousel";

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeCarousel
  }
})
</script>
