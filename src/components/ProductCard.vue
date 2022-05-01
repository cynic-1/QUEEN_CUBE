<template>
  <q-card class="raw gt-xs my-product-card"  flat>
    <q-responsive :ratio="1.7778">
      <q-card-section horizontal>
        <template v-if="left">
          <q-img
            class="col"
            :src="productCardData.img"
            img-class="img-hover"
            style="border-radius:30px 0 0 30px;"
          />
        </template>
        <q-card-section class="col">
          <div class="flex column">
            <div class="my-card-content">
              <div class="my-title">{{ productCardData.title[global.isChinese] }}</div>
              <div class="txt">
                {{ productCardData.subtitle[global.isChinese] }}
              </div>
              <q-btn size="1.25em" class="my-btn" outline push :to="'/productCenter/'+productCardData.title[0]">{{learnMore}}</q-btn>
            </div>
            <div class="my-little-cards x-scroll">
              <template v-for="item of productCardData.productLittleCardData">
                <ProductLCard :product-little-card-data="item"/>
              </template>
            </div>
          </div>

        </q-card-section>
        <template v-if="!left">
          <q-img
            class="col cursor-pointer"
            :src="productCardData.img"
            img-class="img-hover"
            style="border-radius: 0 30px 30px 0;"
          />
        </template>
      </q-card-section>
    </q-responsive>
  </q-card>
  <div class="xs">
    <q-responsive :ratio="1">
      <q-img
        class="col"
        :src="productCardData.img"
        img-class="img-hover"
      >
        <div class="q-px-xs q-my-xl q-gutter-y-md my-img-mobile">
          <div class="text-h3"> {{ productCardData.title[global.isChinese] }}</div>
          <div class="txt text-h4">{{ productCardData.subtitle[global.isChinese] }}</div>
          <q-btn outline push size="md" :to="'/productCenter/'+productCardData.title[0]">{{learnMore}}</q-btn>
        </div>
      </q-img>
<!--        <ProductLCard />-->
    </q-responsive>


      <div class="x-scroll no-scrollbar">
        <template v-for="item in productCardData.productLittleCardData">
          <ProductLCard :is-mobile="true" :product-little-card-data="item" style="margin: 40px 20px 0 20px;"/>
        </template>
      </div>


  </div>
</template>

<script>
import ProductLCard from "components/ProductLCard";
import select from "../api/select"
import {watch} from "vue";
export default {
  name: "ProductCard",
  props: {
    left: {
      type: Boolean,
      default: true
    },
    productCardData: Object

  },
  components: {
    ProductLCard
  },
  data () {
    return {
      global : select.global,
      title : ["ai","智能"],
      content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
        "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
    }
  },
  computed: {
    learnMore() {
      return this.global.isChinese ? "了 解 更 多" : "Learn More"
    },
    // detail() {
    //   return this.global.isChinese ? "了 解 详 情" : "Learn More"
    // }
  }
}
</script>

<style lang="sass" scoped>
.my-product-card
  margin-right: 10%
  margin-left: 10%
  border-radius: 30px
.txt
  font-size: 1.25rem
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
.my-little-cards
  margin: 3vw 0
  width: -webkit-fill-available
.no-shrink
  flex-shrink: 0
.my-card-content
  margin: 3% 5% 0 5%
  > *
    margin-top: 3%
.my-title
  font-size: 2.5rem
.my-btn
  margin-right: 50%
.x-scroll
  display: flex
  justify-content: space-between
  overflow-x: auto
  overflow-y: hidden
  white-space: nowrap
  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar-thumb
    background: linear-gradient(90deg,#A1E7ED 0%,#DD889E 80%)
    border-radius: 4px
    -webkit-box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%)
  &::-webkit-scrollbar-track
    border-radius: 4px
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 0%)
    background: #64646429
  > *
    flex-shrink: 0
    margin: 3%
.no-scrollbar
  &::-webkit-scrollbar
    display: none
.my-img-mobile
  position: absolute
  top: 4vw
  background-color: unset
</style>
