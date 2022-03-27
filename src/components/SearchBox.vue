<template>
  <div class="xs q-pb-sm" style="width: 60%; display: inline-block;">
    <q-input dense outlined color="black" placeholder="键入内容" v-model="text">
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="search" @click="search"/>
      </template>
    </q-input>
  </div>
  <div class="gt-xs q-pb-md" style="width: 30%; display: inline-block;">
    <q-input dense outlined color="black" placeholder="键入内容" v-model="text">
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
      console.log('search!')
    }
  },
  data() {
    return {
      text: '',
    }
  }
}
</script>

<style scoped>

</style>
