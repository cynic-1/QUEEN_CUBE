<template>
  <q-img :src="headerImage" class="header-image">
    <div class="my-header-content">
      <div class="text-h4">{{headerLabel}}</div>
      <div class="text-h6">{{subHeaderLabel}}</div>
    </div>
  </q-img>
  <div class="q-ml-lg q-mt-lg q-gutter-lg">
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
</template>

<script>
export default {
  name: "DownloadPage",
  data() {
    return {
      tab: "software",
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

</style>
