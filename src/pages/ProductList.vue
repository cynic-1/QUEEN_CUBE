<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-ml-lg q-mt-lg q-gutter-lg">
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
    <div class="q-gutter-y-lg" style="overflow-x: auto">
      <template v-for="item in productListCardData">
        <ProductListCard :product-list-card-data="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import ProductListCard from "components/ProductListCard";
import api from "src/api/api";
import select from "src/api/select";

export default {
  name: "ProductList",
  components: {
    HeaderImage,
    ProductListCard
  },
  data() {
    return {
      global: select.global,
      // 需请求数据
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
      headerImageData: {
        headerImage: "https://cdn.quasar.dev/img/parallax2.jpg",
        headerLabel: "栏目标题",
        subHeaderLabel: "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题"
      },
      productListCardData: [
        {
          index: 0,
          name: '产品名称',
          describe: '- 产品参数\n' +
            '- 产品参数\n' +
            '- 产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数\n' +
            ' 产品参数产品参数产品参数',
          imgs: ['https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg",
            'https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg",
            'https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg"],
        },
        {
          index: 0,
          name: '产品名称',
          describe: '- 产品参数\n' +
            '- 产品参数\n' +
            '- 产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数产品参数\n' +
            ' 产品参数产品参数产品参数',
          imgs: ['https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg",
            'https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg",
            'https://cdn.quasar.dev/img/parallax2.jpg', "https://cdn.quasar.dev/img/mountains.jpg"],
        }
      ],
      tab: "software",
      subtab: "software",
    }
  },
  created() {
    this.getProductLines()
    this.getProductList()
  },
  methods: {
    async getProductList() {
      let res = await api.getProductList(this.tab, this.subtab)
      if (res.data.code === 0 && res.status === 200) {
        // this.categories = res.data.data.categories
        this.headerImageData = res.data.data.headerImageData
        this.productListCardData = res.data.data.productListCardData
      }
    },
    async getProductLines() {
      let res = await api.getProductLines()
      if (res.data.code === 0 && res.status === 200) {
        this.productLines = res.data.data.productLines
        this.tab = this.productLines[0]
        this.subtab = this.tab.categories[0]
      }
    }
  },
}
</script>

<style scoped>

</style>
