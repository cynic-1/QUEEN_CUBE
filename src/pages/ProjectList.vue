<template>
  <div class="q-gutter-xl">
    <projectListCardRight/>
    <projectListCardLeft/>
    <projectListCardRight/>
    <projectListCardLeft/>
  </div>
  <div class="q-gutter-xl">
    <productLCard/>
    <productLCard/>
    <productLCard/>
    <productLCard/>
  </div>
</template>

<script>
import projectListCardRight from "components/ProjectListCardRight"
import projectListCardLeft from "components/ProjectListCardLeft"
import productLCard from "components/productLCard"
export default {
  name: "ProjectList",
  data() {
    return {

    }
  },
  components: {
    projectListCardRight,
    projectListCardLeft,
    productLCard,
  }
}
</script>

<style scoped>

</style>
