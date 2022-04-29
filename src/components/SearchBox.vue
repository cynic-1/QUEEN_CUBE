<template>
  <div class="xs q-pb-sm" style="width: 60%; display: inline-block;">
    <q-input dense outlined color="black" :placeholder="PlaceHolder" v-model="text" @keyup.enter="search">
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="search" @click="search"/>
      </template>
    </q-input>
  </div>
  <div class="gt-xs q-pb-md" style="width: 30%; display: inline-block;">
    <q-input dense outlined color="black" :placeholder="PlaceHolder" v-model="text" @keyup.enter="search">
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="search" @click="search"/>
      </template>
    </q-input>
  </div>
</template>

<script>
import select from "../api/select"

export default {
  name: "SearchBox",
  methods: {
    search() {
      // console.log('search!')
      this.$router.push({
        path: '/searchResults',
        query: {
          'word': this.text
        }
      })
    },
    getText() {
      this.text = this.$route.query.word
    }
  },
  data() {
    return {
      text: "",
      global: select.global
    }
  },
  mounted() {
    this.getText()
  },
  watch: {
    '$route': function () {
      this.text = this.$route.query.word
      console.log(this.text)
    }
  },
  computed: {
    PlaceHolder() {
      return this.global.isChinese ? "键入内容" : "Input Content"
    }
  }
}
</script>

<style scoped>

</style>
