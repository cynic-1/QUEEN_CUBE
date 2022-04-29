<template>
  <div style="background-color: #ADB0AF;" class="col text-center">
    <div class="gt-xs q-py-md text-white text-h5">
      {{PlaceHolder}}
    </div>
    <div class="xs q-py-sm text-white text-h6">
      {{PlaceHolder}}
    </div>
    <SearchBox/>
  </div>
</template>

<script>
import SearchBox from "components/SearchBox";
import select from "../api/select"
export default {
  name: "HomeSearch",
  components: {
    SearchBox
  },
  data() {
    return {
      text: '',
      global: select.global
    }
  },
  methods: {
  },
  computed: {
    PlaceHolder() {
      return this.global.isChinese ? "在此搜索您感兴趣的内容" : "Search Here"
    }
  }
}
</script>

<style scoped>

</style>
