<template>
  <div class="my-card justify-center">
    <q-card class="raw bg-grey-3" style="width: 100%;border-radius:5%;" flat>
      <q-responsive :ratio="2.568">
        <q-card-section horizontal>
          <template v-if="left">
            <q-img
              class="col"
              :src="image"
              style="border-radius:5% 0 0 5%"
            />
          </template>
          <q-card-section class="col">
            <div class="q-gutter-xl" >
              <div class="text-h5">{{ title }}</div>
              <div style="width:60%">{{ content }}</div>
              <q-btn color="black" push class="">了 解 更 多</q-btn>
            </div>
          </q-card-section>
          <template v-if="!left">
            <q-img
              class="col"
              :src="image"
              style="border-radius: 0 5% 5% 0;"
            />
          </template>
        </q-card-section>
      </q-responsive>
    </q-card>
    <!--          <q-responsive :ratio="16/9" class="raw">-->
    <!--            <q-card class="column">-->
    <!--              <q-img class="col" src="https://cdn.quasar.dev/img/parallax2.jpg" />-->

    <!--              <q-card-section>-->
    <!--                <div>Ratio 16:9</div>-->
    <!--              </q-card-section>-->
    <!--            </q-card>-->
    <!--          </q-responsive>-->
  </div>
</template>

<script>
export default {
  name: "ProjectListCard",
  props: {
    left: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      title : "智能",
      content : "副标题副标题副标题副标题副标题副标题副标题" +
        "副标题副标题副标题副标题副标题副标题副标题" +
        "副标题副标题副标题副标题副标题副标题副标题" ,
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  margin-right: 10%
  margin-left: 10%
  height: 70%
</style>
