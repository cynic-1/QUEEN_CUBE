<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-gutter-y-xl q-mt-xl">

    <template v-if="newsListIds.length < 4">
      <template v-for="id of newsListIds">
        <NewsListCard :id="id" />
      </template>
    </template>
    <template v-else>
      <NewsListCard :id="newsListIds[0]"/>
      <div class="gt-xs" style="display: flex; width: 80vw; margin: 48px auto">
        <NewsListCard :is-small="true" :id="newsListIds[1]"/>
        <NewsListCard :is-small="true" :id="newsListIds[2]"/>
      </div>
      <div class="xs">
        <NewsListCard :id="newsListIds[1]" style="margin:0 auto 48px auto"/>
        <NewsListCard :id="newsListIds[2]"/>
      </div>
      <NewsListCard :id="newsListIds[3]"/>
    </template>


    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="black"
        :max="maxPage"
        :max-pages="5"
        :boundary-numbers="true"
      />
    </div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import NewsListCard from "components/NewsListCard";
import api from "src/api/api";
import select from "src/api/select";

export default {
  name: "NewsListPage",
  data() {
    return {
      global: select.global,
      newsListIds: [],
      current: 1,
      maxPage: 3,
      headerImageData: {
        headerImage: "",
        headerLabel: "",
        subHeaderLabel: ""
      }
    }
  },
  created() {
    this.getNewsListIds()
  },
  methods: {
    async getNewsListIds() {
      try {
        let res = await api.getNewsListIds(this.current)
        if (res.data.code === 0 && res.status === 200) {
          this.newsListIds = res.data.data.newsListIds
          this.headerImageData = res.data.data.headerImageData
          this.maxPage = res.data.data.maxPage
        }
      } catch (e) {
        console.log(e)
      }

    },
  },
  components: {
    HeaderImage,
    NewsListCard
  },
  watch: {
    current() {
      this.getNewsListIds()
    },
  }
}
</script>

<style scoped>

</style>
