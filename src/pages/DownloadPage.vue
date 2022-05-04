<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-mt-lg q-gutter-lg page-width">
    <div class="gt-xs q-gutter-lg">
      <template v-for="item of productLines">
        <q-btn outline :label="item.label[global.isChinese]" size="1.25rem" padding="0 40px" @click="tab=item"
               :class="{'bg-grey': tab===item}"/>
      </template>
      <q-tabs
        align="left"
      >
        <template v-for="it of tab.categories">
          <q-route-tab :to="'/download/'+tab.label[0]+'/'+it.label[0]">
            {{it.label[global.isChinese]}}
          </q-route-tab>
        </template>
      </q-tabs>
    </div>
    <div class="xs q-gutter-lg">
      <template v-for="item of productLines">
        <q-btn outline :label="item.label[global.isChinese]" size="1.25rem" padding="0 40px" @click="tab=item"
               :class="{'bg-grey': tab===item}"/>
      </template>
      <q-tabs
        align="left"
      >
        <template v-for="it of tab.categories">
          <q-route-tab :to="'/download/'+tab.label[0]+'/'+it.label[0]">
            {{it.label[global.isChinese]}}
          </q-route-tab>
        </template>
      </q-tabs>
    </div>
    <div class="q-pt-md q-gutter-y-xl">
      <div class="gt-xs grid">
        <template v-for="item in productLittleCardData">
          <ProductLCard :is-download="true" class="grid__item" :product-little-card-data="item"/>
        </template>
      </div>
      <div class="xs q-gutter-y-md flex flex-center">
        <template v-for="item in productLittleCardData">
          <ProductLCard :is-mobile="true" :is-download="true" :product-little-card-data="item"/>
        </template>
      </div>
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
  </div>
</template>

<script>
import ProductLCard from "components/ProductLCard";
import HeaderImage from "components/HeaderImage";
import api from "src/api/api";
import select from "src/api/select";

export default {
  name: "DownloadPage",
  components: {
    ProductLCard,
    HeaderImage
  },
  data() {
    return {
      global: select.global,
      tab: "",
      subtab: "",
      current: 1,
      // 需请求
      maxPage: 3,
      headerImageData: {
        headerImage: "",
        headerLabel: "",
        subHeaderLabel: ""
      },
      productLittleCardData: [
        {
          title: "",
          content: "",
          img: "",
          link: "",
          handbook: "",
          driver: ""
        },
      ],
      productLines: [
        {
          label: ["", ""],
          categories: [
            {
              label: ["", "",],
              link: ""
            },
            {
              label: ["",""],
              link: ""
            },
          ],
        },
      ],
    }
  },
  created() {
    this.getProductLines()
    // this.getProductList()
  },
  methods: {
    async getDownload() {
      try {
        let res = await api.getDownload(this.tab.label[0], this.subtab, this.current)
        if (res.data.code === 0 && res.status === 200) {
          this.headerImageData = res.data.data.headerImageData
          this.productLittleCardData = res.data.data.productLittleCardData
          this.maxPage = res.data.data.maxPage
          // this.productLines = res.data.data.productLines
        }
      } catch (e) {
        console.log(e)
      }

    },
    async getProductLines() {
      try {
        let res = await api.getProductLines()
        if (res.data.code === 0 && res.status === 200) {
          this.productLines = res.data.data.productLines
          this.tab = this.productLines.find(ele => ele.label[0] === this.$route.params.productLine) || this.productLines[0]
          this.subtab = this.$route.params.product || this.tab.categories[0].label[0]
        }
      } catch (e) {
        console.log(e)
      }

    },
    jumpTo(item) {
      this.$router.push('/download/'+item.label[0]+'/'+item.categories[0].label[0])
    },
  },
  watch: {
    current() {
      this.getDownload()
    },
    tab(newTab) {
      this.subtab = this.$route.params.product || newTab.categories[0].label[0]
    },
    subtab() {
      this.getDownload()
    },
    '$route': function () {
      this.tab = this.productLines.find(ele => ele.label[0] === this.$route.params.productLine) || this.productLines[0]
      this.subtab = this.$route.params.product || this.tab.categories[0].label[0]
    }
  }
}
</script>

<style lang="sass" scoped>
.header-image
  width: 100%
  height: 260px
.my-header-content
  background-color: unset
  margin: 20px 20px
  > *
    padding: 20px 0
.my-tabs-content
  .q-tab__label
    font-size: 17.5px
@media (min-device-width: 600px)
  .page-width
    padding: 0 10vw
  .grid
    display: flex
    flex-wrap: wrap
    padding: 0
    list-style: none
  .grid__item
    width: calc(25% - 1.5rem)
    margin: auto 0.75rem 1.5rem 0.75rem
</style>
