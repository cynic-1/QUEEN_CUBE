<template>
  <div style="background-color: #ADB0AF;" class="col text-center">
    <div class="gt-xs q-py-md text-white text-h5">
      在此搜索您感兴趣的内容
    </div>
    <div class="xs q-py-sm text-white text-h6">
      在此搜索您感兴趣的内容
    </div>
    <SearchBox/>
  </div>
</template>

<script>
import SearchBox from "components/SearchBox";
export default {
  name: "HomeSearch",
  components: {
    SearchBox
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    search() {
      console.log('search!')
    }
  }
}
</script>

<style scoped>

</style>
