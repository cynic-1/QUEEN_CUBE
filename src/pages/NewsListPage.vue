<template>
  <HeaderImage/>
  <div class="q-gutter-y-xl q-mt-xl">
    <template v-for="newsListId in newsListIds">
      <NewsListCard :id="newsListId"/>
    </template>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import NewsListCard from "components/NewsListCard";
import api from "src/api/api";

export default {
  name: "NewsListPage",
  data() {
    return {
      newsListIds: [],
    }
  },
  created() {
    this.getNewsListIds()
  },
  methods: {
    async getNewsListIds() {
      let res = await api.getNewsListIds()
      if (res.data.code === 0 && res.status === 200) {
        this.newsListIds = res.data.data.newsListIds
      }
    },
  },
  components: {
    HeaderImage,
    NewsListCard
  },
}
</script>

<style scoped>

</style>
