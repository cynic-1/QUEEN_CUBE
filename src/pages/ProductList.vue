<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-ml-lg q-mt-lg q-gutter-lg">
    <template v-for="item of productLines">
      <q-btn outline :label="item" size="1.25rem" padding="0 40px"/>
      <q-tabs
        v-model="tab"
        align="left"
      >
        <template v-for="it of item.categories">
          <q-tab :name="it.english" :label="it.chinese"/>
        </template>
      </q-tabs>
    </template>
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
          label: "产品线1",
          categories: [
            {
              chinese: "软件",
              english: "software"
            },
            {
              chinese: "面板",
              english: "frame"
            },
          ],
        },
        {
          label: "产品线2",
          categories: [
            {
              chinese: "软件",
              english: "software"
            },
            {
              chinese: "面板",
              english: "frame"
            },
          ],
        }
      ],
      categories: [
        {
          chinese: "软件",
          english: "software"
        },
        {
          chinese: "面板",
          english: "frame"
        },
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

    }
  },
  created() {
    this.getProductList()
  },
  methods: {
    async getProductList() {
      let res = await api.getProductList()
      if (res.data.code === 0 && res.status === 200) {
        this.productLines = res.data.data.productLines
        // this.categories = res.data.data.categories
        this.headerImageData = res.data.data.headerImageData
        this.productListCardData = res.data.data.productListCardData
      }
    },
  },
}
</script>

<style scoped>

</style>
