<template>
  <div class="my-product-card">
    <q-card class="raw gt-xs"  flat square>
      <q-responsive :ratio="1.7778">
        <q-card-section horizontal>
          <template v-if="left">
            <q-img
              class="col"
              :src="image"
              img-class="img-hover"
              style="border-radius:8px 0 0 8px;"
            />
          </template>
          <q-card-section class="col">
            <div class="flex column">
              <div class="my-card-content">
                <div class="my-title">{{ title[global.isChinese] }}</div>
                <div class="txt">
                  {{ content }}
                </div>
                <q-btn size="1.25em" class="my-btn" outline push>了 解 更 多</q-btn>
              </div>
              <div class="my-little-cards x-scroll">
                <ProductLCard />
                <ProductLCard />
                <ProductLCard />
                <ProductLCard />
              </div>
            </div>

          </q-card-section>
          <template v-if="!left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              img-class="img-hover"
              style="border-radius: 0 8px 8px 0;"
            />
          </template>
        </q-card-section>
      </q-responsive>
    </q-card>
    <div class="xs">
      <q-responsive :ratio="8/9">
        <q-img
          class="col cursor-pointer"
          :src="image"
          img-class="img-hover"
        >
          <div class="q-px-xs q-gutter-y-xs my-img-mobile">
            <div class=""> {{ title[global.isChinese] }}</div>
            <div class="txt">{{ content }}</div>
            <q-btn outline push size="xs">了 解 更 多</q-btn>
          </div>
        </q-img>
<!--        <ProductLCard />-->
      </q-responsive>
      <q-card>

          <div class="my-little-cards">
            <div class="x-scroll">
              <template v-for="x in 4">
                <ProductLCard :is-mobile="true"/>
              </template>
            </div>
          </div>
      </q-card>
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
    }
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
}
</script>

<style lang="sass" scoped>
.my-product-card
  margin-right: 10%
  margin-left: 10%
  border-radius: 8px
.txt
  font-size: 1rem
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
.my-little-cards
  margin: 10% 0 0 0
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
    background: linear-gradient(90deg,#FF00D1 0%,#B653FF 80%)
    border-radius: 4px
    -webkit-box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%)
  &::-webkit-scrollbar-track
    border-radius: 4px
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 0%)
    background: #64646429
  > *
    flex-shrink: 0
    margin: 3%
.my-img-mobile
  position: absolute
  top: 4vw
  background-color: unset
</style>
