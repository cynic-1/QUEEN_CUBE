<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-ml-lg q-mt-lg q-gutter-lg">
    <template v-for="item of productLines">
      <q-btn outline :label="item" size="1.25rem" padding="0 40px"/>
    </template>
    <q-tabs
      v-model="tab"
      align="left"
    >
      <template v-for="item of categories">
        <q-tab :name="item.english" :label="item.chinese"/>
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

export default {
  name: "ProductList",
  components: {
    HeaderImage,
    ProductListCard
  },
  data() {
    return {
      // 需请求数据
      productLines: [
        "产品线1","产品线2","产品线3"
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
  }
}
</script>

<style scoped>

</style>
