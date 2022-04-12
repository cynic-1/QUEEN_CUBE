<template>
  <q-img :src="headerImage" class="header-image">
    <div class="my-header-content">
      <div class="text-h4">{{headerLabel}}</div>
      <div class="text-h6">{{subHeaderLabel}}</div>
    </div>
  </q-img>
</template>

<script>
export default {
  name: "DownloadPage",
  data() {
    return {
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
</style>
