<template>
  <HeaderImage/>
  <div class="q-mt-lg q-gutter-lg">
    <div class="gt-xs q-ml-xl q-gutter-lg">
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
      <div class="gt-xs q-ml-sm q-gutter-xl row">
        <template v-for="x in 8">
          <ProductLCard :is-download="true"/>
        </template>
      </div>
      <div class="xs q-gutter-y-md">
        <template v-for="x in 8">
          <ProductLCard :is-mobile="true" :is-download="true"/>
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

export default {
  name: "DownloadPage",
  components: {
    ProductLCard,
    HeaderImage
  },
  data() {
    return {
      tab: "software",
      current: 1,
      headerImage: "https://cdn.quasar.dev/img/parallax2.jpg",
      headerLabel: "栏目标题",
      subHeaderLabel: "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
    }
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
.my-selection
  @media screen
</style>
