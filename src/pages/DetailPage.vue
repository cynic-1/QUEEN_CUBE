<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="page-width">
    <h4>{{title[global.isChinese]}}</h4>
    <h6>{{date[global.isChinese]}}</h6>
    <div v-html="content[global.isChinese]" class="htmlBox"></div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import api from "../api/api.js"
import select from "../api/select"
export default {
  name: "DetailPage",
  components: {
    HeaderImage
  },
  data() {
    return {
      global: select.global,
      type: this.$route.query.type,
      id: this.$route.query.id,
      // 需请求
      headerImageData: {
        headerImage: "",
        headerLabel: "",
        subHeaderLabel: ""
      },
      title: ["",""],
      date: ["", ""],
      content: ["", ""]
    }
  },
  methods: {
    async getDetailData() {
      try {
        let res = await api.getDetailData(this.type, this.id)
        if (res.data.code === 0 && res.status === 200) {
          this.headerImageData = res.data.data.headerImg
          this.title = res.data.data.title
          this.date = res.data.data.date
          this.content = res.data.data.content
        }
      } catch (e) {
        console.log(e)
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
.htmlBox >>> img {
  width: 60vw;
}
@media (min-device-width: 600px) {
  .page-width {
    padding: 0 10vw;
  }
  .htmlBox >>> p {
    font-size: 20px;
  }
}
@media (max-device-width: 600px) {
  .page-width {
    padding: 0 20px;
  }
}
</style>
