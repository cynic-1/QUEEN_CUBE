<template>
  <q-page class="flex">
    <div class="col">
      <HomeCarousel/>
      <div class="q-gutter-y-xl q-py-xl">
        <ProductCard :left="false"/>
        <ProductCard/>
        <HomeSearch/>
        <div class="text-center text-h4 text-weight-bolder">解决方案</div>
        <div class="gt-xs flex justify-around">
          <template v-for="x in 3">
            <HomeSolutionCard/>
          </template>
        </div>
        <div class="xs x-scroll">
          <template v-for="x in 3">
            <HomeSolutionCard :is-mobile="true"/>
          </template>
        </div>
        <div class="gt-xs flex justify-around q-pt-xl">
          <template v-for="x in 4">
            <HomeNewsCard/>
          </template>
        </div>
        <div class="xs x-scroll">
          <template v-for="x in 4">
            <HomeNewsCard :is-mobile="true"/>
          </template>
        </div>
        <div class="text-center q-pt-xl">
          <q-btn color="black" to="news" size="1.25rem" label="查看所有新闻" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HomeCarousel from "components/HomeCarousel";
import HomeSearch from "components/HomeSearch";
import ProductCard from "components/ProductCard";
import HomeSolutionCard from "components/HomeSolutionCard";
import HomeNewsCard from "components/HomeNewsCard";

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomeCarousel,
    HomeSearch,
    ProductCard,
    HomeSolutionCard,
    HomeNewsCard
  }
})
</script>

<style lang="sass" scoped>
.x-scroll
  width: auto
  display: flex
  justify-content: space-between
  overflow-x: scroll
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
</style>
