<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-mt-lg q-gutter-lg page-width">
    <div class="gt-xs q-gutter-lg">
      <template v-for="item of productLines">
        <q-btn outline :label="item" size="1.25rem" padding="0 40px"/>
        <q-tabs
          v-model="tab"
          align="left"
        >
          <template v-for="it of item.categories">
            <q-tab :name="it.link" :label="it.label"/>
          </template>
        </q-tabs>
      </template>
    </div>
    <div class="xs q-gutter-lg">
      <template v-for="x in 3">
        <q-btn outline label="产品线" size="1.25rem" padding="0 40px"/>
      </template>
      <q-tabs
        v-model="tab"
        align="left"
      >
        <q-tab name="software" label="软件"/>
        <q-tab name="panel" label="面板/底座" />
        <q-tab name="XXX" label="XXX" />
        <q-tab name="XXXX" label="XXXX" />
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
          label: "产品线1",
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
        },
        {
          label: "产品线2",
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
      let res = await api.getDownload(this.tab, this.subtab)
      if (res.data.code === 0 && res.status === 200) {
        this.headerImageData = res.data.data.headerImageData
        this.productLittleCardData = res.data.data.productLittleCardData
        this.productLines = res.data.data.productLines
      }
    },
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
