<template>
  <q-img :src="headerImageData.headerImage" class="header-image">
    <div class="my-header-content" :class="{'text-center': isCenter}">
      <div class="text-h4">{{headerImageData.headerLabel}}</div>
      <div class="text-h6">{{headerImageData.subHeaderLabel}}</div>
    </div>
  </q-img>

</template>

<script>
export default {
  name: "HeaderImage",
  props: {
    headerImageData: Object,
    isCenter: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
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
  width: 100%
  margin: 20px
  > *
    padding: 20px 0
.my-tabs-content
  .q-tab__label
    font-size: 17.5px

</style>
