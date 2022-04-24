<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-mt-lg q-gutter-lg page-width">
    <div class="gt-xs q-gutter-lg">
      <template v-for="item of productLines">
        <q-btn outline :label="item.label[global.isChinese]" size="1.25rem" padding="0 40px" @click="tab=item"
               :class="{'bg-grey': tab===item}"/>
      </template>
      <q-tabs
        v-model="subtab"
        align="left"
      >
        <template v-for="it of tab.categories">
          <q-tab :name="it" :label="it.label[global.isChinese]"/>
        </template>
      </q-tabs>
    </div>
    <div class="xs q-gutter-lg">
      <template v-for="item of productLines">
        <q-btn outline :label="item.label[global.isChinese]" size="1.25rem" padding="0 40px" @click="tab=item"
               :class="{'bg-grey': tab===item}"/>
      </template>
      <q-tabs
        v-model="subtab"
        align="left"
      >
        <template v-for="it of tab.categories">
          <q-tab :name="it" :label="it.label[global.isChinese]"/>
        </template>
      </q-tabs>
    </div>
    <div class="q-pt-md q-gutter-y-xl flex flex-center">
      <div class="gt-xs grid">
        <template v-for="item in productLittleCardData">
          <ProductLCard :is-download="true" class="grid__item" :product-little-card-data="item"/>
        </template>
      </div>
      <div class="xs q-gutter-y-md">
        <template v-for="item in productLittleCardData">
          <ProductLCard :is-mobile="true" :is-download="true" :product-little-card-data="item"/>
        </template>
      </div>
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
      tab: "line1",
      subtab: "software",
      current: 1,
      // 需请求
      maxPage: 3,
      headerImageData: {
        headerImage: "https://cdn.quasar.dev/img/parallax2.jpg",
        headerLabel: "栏目标题",
        subHeaderLabel: "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题"
      },
      productLittleCardData: [
        {
          title: "KNX毅系列面板",
          content: "3 种颜色可选（深空灰/玫瑰金...)",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          link: "",
          handbook: "撒旦发射点发射点",
          driver: "123"
        },
        {
          title: "KNX毅系列面板",
          content: "3 种颜色可选（深空灰/玫瑰金...)",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          link: "",
          handbook: "撒旦发射点发射点",
          driver: "123"
        },
        {
          title: "KNX毅系列面板",
          content: "3 种颜色可选（深空灰/玫瑰金...)",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          link: "",
          handbook: "撒旦发射点发射点",
          driver: "123"
        },
      ],
      productLines: [
        {
          label: ["Productline1", "产品线1"],
          categories: [
            {
              label: ["software", "软件",],
              link: ""
            },
            {
              label: ["软件","software"],
              link: ""
            },
          ],
        },
        {
          label: ["Productline2", "产品线2"],
          categories: [
            {
              label: ["软件","software"],
              link: ""
            },
            {
              label: ["软件","software"],
              link: ""
            },
          ],
        }
      ],
    }
  },
  created() {
    this.getDownload()
  },
  methods: {
    async getDownload() {
      let res = await api.getDownload(this.tab, this.subtab, this.current)
      if (res.data.code === 0 && res.status === 200) {
        this.headerImageData = res.data.data.headerImageData
        this.productLittleCardData = res.data.data.productLittleCardData
        this.maxPage = res.data.data.maxPage
        // this.productLines = res.data.data.productLines
      }
    },
  },
  watch: {
    current() {
      this.getDownload()
    },
    tab(newTab) {
      this.subtab = newTab.categories[0]
    },
    subtab() {
      this.getDownload()
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
