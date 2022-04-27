<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-px-md">
    <h4>{{title}}</h4>
    <h6>{{date}}</h6>
    <div v-html="content"></div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import api from "../api/api.js"
export default {
  name: "DetailPage",
  components: {
    HeaderImage
  },
  data() {
    return {
      type: this.$route.query.type,
      id: this.$route.query.id,
      // 需请求
      headerImageData: {
        headerImage: "https://cdn.quasar.dev/img/parallax2.jpg",
        headerLabel: "",
        subHeaderLabel: ""
      },
      title: "",
      date: "",
      content: "<h1>Hello World</h1>"
    }
  },
  methods: {
    async getDetailData() {
      let res = await api.getDetailData(this.type, this.id)
      if (res.data.code === 0 && res.status === 200) {
        this.headerImageData.headerImage = res.data.data.headerImage
        this.title = res.data.data.title
        this.date = res.data.data.date
        this.content = res.data.data.content
      }
    }
  },
  watch: {
    '$route': function () {
      this.type = this.$route.query.type
      this.id = this.$route.query.id
    },
    type() {
      this.getDetailData()
    },
  },
  created() {
    this.getDetailData()
  }
}
</script>

<style scoped>

</style>
