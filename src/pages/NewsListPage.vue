<template>
  <HeaderImage/>
  <div class="q-gutter-y-xl q-mt-xl">

    <NewsListCard/>
    <div class="gt-xs" style="display: flex; width: 80vw; margin: 48px auto">
      <NewsListCard :is-small="true"/>
      <NewsListCard :is-small="true"/>
    </div>

    <NewsListCard class="xs"/>
    <NewsListCard class="xs"/>
    <NewsListCard/>

    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="black"
        :max="10"
        :max-pages="3"
        :boundary-numbers="true"
      />
    </div>
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
      current: 1
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
