<template>
  <div class="my-card justify-center">
    <q-card class="raw bg-grey-3" flat square>
      <q-responsive :ratio="16/9">
        <q-card-section horizontal>
          <template v-if="left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              img-class="img-hover"
            />
          </template>
          <q-card-section class="col">
            <div class="gt-xs q-px-xl q-gutter-y-lg" style="width: 100%;">
              <div class="text-h4 q-pt-xl">{{ title }}</div>
              <div class="txt text-h5">
                {{ content }}
              </div>
              <q-btn color="black" size="1.25em" push>了 解 更 多</q-btn>
              <div class="my-little-cards">
                <ProductLCard class="no-shrink"/>
                <ProductLCard class="no-shrink"/>
              </div>
            </div>
            <div class="xs q-px-xs q-gutter-y-xs" style="width: 100%;">
              <div>{{ title }}</div>
              <div class="txt">{{ content }}</div>
              <q-btn color="black" push size="xs">了 解 更 多</q-btn>
            </div>

          </q-card-section>
          <template v-if="!left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              img-class="img-hover"
            />
          </template>
        </q-card-section>
      </q-responsive>
    </q-card>
  </div>
</template>

<script>
import ProductLCard from "components/ProductLCard";
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
      title : "智能",
      content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
        "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  margin-right: 10%
  margin-left: 10%
.txt
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
.my-little-cards
  margin-top: 15%
  display: flex
  justify-content: space-around
.no-shrink
  flex-shrink: 0
</style>
