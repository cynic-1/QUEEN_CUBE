<template>
  <div class="my-card">
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
            <div class="gt-xs flex column">
              <div class="my-card-content">
                <div class="my-title">{{ title }}</div>
                <div class="txt">
                  {{ content }}
                </div>
                <q-btn color="black" size="1.25em" class="my-btn" push>了 解 更 多</q-btn>
              </div>
              <div class="my-little-cards x-scroll">
                <ProductLCard />
                <ProductLCard />
                <ProductLCard />
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
  font-size: 1rem
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
.my-little-cards
  margin: 10% 0 0 0
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
    position: absolute
    top: 20px
    color: black
  > *
    flex-shrink: 0
</style>
