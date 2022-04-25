<template>
  <div class="xs q-pb-sm" style="width: 60%; display: inline-block;">
    <q-input dense outlined color="black" placeholder="键入内容" v-model="text" @keyup.enter="search">
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="search" @click="search"/>
      </template>
    </q-input>
  </div>
  <div class="gt-xs q-pb-md" style="width: 30%; display: inline-block;">
    <q-input dense outlined color="black" placeholder="键入内容" v-model="text" @keyup.enter="search">
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="search" @click="search"/>
      </template>
    </q-input>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
