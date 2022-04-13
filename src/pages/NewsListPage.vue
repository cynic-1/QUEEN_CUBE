<template>
  <HeaderImage/>
  <div class="q-gutter-y-xl q-mt-xl">
    <template v-for="x in 4">
      <NewsListCard/>
    </template>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import NewsListCard from "components/NewsListCard";

export default {
  name: "NewsListPage",
  components: {
    HeaderImage,
    NewsListCard
  }
}
</script>

<style scoped>

</style>
