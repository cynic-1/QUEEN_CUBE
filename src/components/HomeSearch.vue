<template>
  <div style="background-color: #ADB0AF;" class="col text-center">
      <div class="q-py-md text-white text-h5">
        在此搜索您感兴趣的内容
      </div>
      <div class="q-pb-md" style="width: 30%; display: inline-block;">
        <q-input dense square outlined placeholder="键入内容" v-model="text">
          <template v-slot:append>
            <q-icon class="cursor-pointer" name="search" @click="search"/>
          </template>
        </q-input>
      </div>

  </div>
</template>

<script>
export default {
  name: "HomeSearch",
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
