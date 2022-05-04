<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="q-ml-lg q-mt-lg q-gutter-lg">
    <template v-for="item of productLines">
      <q-btn outline :label="item.label[global.isChinese]" size="1.25rem" padding="0 40px" @click="jumpTo(item)"
      :class="{'bg-grey': tab===item}"/>
    </template>
    <q-tabs
      align="left"
    >
      <template v-for="it of tab.categories">
        <q-route-tab :to="'/productCenter/'+tab.label[0]+'/'+it.label[0]">
          {{it.label[global.isChinese]}}
        </q-route-tab>
      </template>
    </q-tabs>
    <div class="q-gutter-y-lg" style="overflow-x: auto">
      <template v-for="item in productListCardData">
        <ProductListCard :product-list-card-data="item"/>
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
      current: 1,
      // 需请求数据
      maxPage: 3,
      productLines: [
        {
          label: ["", ""],
          categories: [
            {
              label: ["", "",],
            },
            {
              label: ["",""],
            },
          ],
        },
      ],
      headerImageData: {
        headerImage: "",
        headerLabel: "",
        subHeaderLabel: ""
      },
      productListCardData: [
        {
          index: 0,
          name: '产品名称',
          content: '型号型号',
          describe: '- 产品参数\n',
          imgs: [''],
        },
      ],
      tab: "",
      subtab: "",
    }
  },
  created() {
    this.getProductLines()
    // this.getProductList()
  },
  methods: {
    async getProductList() {
      try {
        let res = await api.getProductList(this.tab.label[0], this.subtab, this.current)
        if (res.data.code === 0 && res.status === 200) {
          // this.categories = res.data.data.categories
          this.headerImageData = res.data.data.headerImageData
          this.productListCardData = res.data.data.productListCardData
          this.maxPage = res.data.data.maxPage
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
      this.$router.push('/productCenter/'+item.label[0]+'/'+item.categories[0].label[0])
    },
  },
  watch: {
    current() {
      this.getProductList()
    },
    tab(newTab) {
      this.subtab = this.$route.params.product || newTab.categories[0].label[0]
    },
    subtab() {
      this.getProductList()
    },
    '$route': function () {
      this.tab = this.productLines.find(ele => ele.label[0] === this.$route.params.productLine) || this.productLines[0]
      this.subtab = this.$route.params.product || this.tab.categories[0].label[0]
    }
  }
}
</script>

<style scoped>

</style>
