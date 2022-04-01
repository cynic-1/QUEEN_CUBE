<template>
  <div class="my-card justify-center">
    <q-card class="raw bg-grey-3" style="width: 100%;border-radius:5%;" flat>
      <q-responsive :ratio="2.568">
        <q-card-section horizontal>
          <template v-if="left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              style="border-radius:5% 0 0 5%"
              img-class="img-hover"
            />
          </template>
          <q-card-section class="col">
            <div class="gt-xs q-px-xl q-gutter-y-lg absolute-center" style="width: 100%;">
              <div class="text-h5">{{ title }}</div>
              <div class="txt" style="font-size: 1rem;">
               {{ content }}
              </div>
              <q-btn color="black" push>了 解 更 多</q-btn>
            </div>
            <div class="xs q-px-xs q-gutter-y-xs" style="width: 100%;">
              <div>{{ title }}</div>
              <div class="txt">{{ content }}</div>
              <q-btn color="black" push size="xs">了 解 更 多</q-btn>
            </div>
          </q-card-section>
          <template v-if="!left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              style="border-radius: 0 5% 5% 0;"
              img-class="img-hover"
            />
          </template>
        </q-card-section>
      </q-responsive>
    </q-card>
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
      content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
        "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
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

.txt
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  font-size: 10px


</style>
