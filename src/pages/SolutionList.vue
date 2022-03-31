<template>
  <div class="gt-xs q-gutter-y-xl">
    <SolutionCard/>
    <SolutionCard :left="false"/>
  </div>
  <div class="xs q-gutter-y-sm">
    <SolutionCard/>
    <SolutionCard :left="false"/>
  </div>
</template>

<script>
import SolutionCard from "components/SolutionCard"
import productLCard from "components/ProductLCard"
export default {
  name: "ProjectList",
  data() {
    return {

    }
  },
  components: {
    SolutionCard,
    productLCard,
  }
}
</script>

<style scoped>

</style>
