<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="gt-xs q-gutter-y-xl" style="margin-top: 60px;">
    <template v-for="(item,idx) of solutionCardData">
      <SolutionCard :left="idx%2===0" :solution-card-data="item"/>
    </template>
  </div>
  <div class="xs q-gutter-y-md q-pt-lg">
    <template v-for="(item,idx) of solutionCardData">
      <SolutionCard :left="idx%2===0" :solution-card-data="item"/>
    </template>
  </div>
</template>

<script>
import api from "src/api/api";
import select from "src/api/select";
import SolutionCard from "components/SolutionCard"
import productLCard from "components/ProductLCard"
import HeaderImage from "components/HeaderImage";
export default {
  name: "ProjectList",
  data() {
    return {
      global: select.global,
      headerImageData: {
        headerImage: "",
        headerLabel: "",
        subHeaderLabel: ""
      },
      solutionCardData: [
        {
          title : "",
          content : "",
          img: "",
          btn: {
            label: ['', ''],
            link: ""
          }
        },
      ],
      solutionTabs: [
        {
          label: ["", ""],
        }
      ]
    }
  },
  components: {
    SolutionCard,
    productLCard,
    HeaderImage
  },
  methods: {
    async getSolutionLists() {
      try {
        let res = await api.getSolutionLists()
        if (res.data.code === 0 && res.status === 200) {
          this.headerImageData = res.data.data.headerImageData
          this.solutionCardData = res.data.data.solutionCardData
        }
      } catch (e) {
        console.log(e)
      }

    },
  },
  created() {
    this.getSolutionLists()
  }
}
</script>

<style scoped>
video {
  width: 100%;
  height: 40vh;
  object-fit: fill;
}
</style>
