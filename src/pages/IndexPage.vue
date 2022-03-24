<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div class="text-h1">h1标题</div>
    <div class="text-h2">h2标题</div>
    <div class="text-h3">h3标题</div>
    <div class="text-h4">h4标题</div>
    <div class="text-h5">h5标题</div>
    <div class="text-h6">h6标题</div>
    <q-card>
      <q-card-section>
        <div class="text-h5">h5标题</div>
        <div class="text-h6">h6标题</div>
        <q-img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
