<template>
  <div class="justify-center">
    <q-card class="raw my-card" flat>
      <q-responsive :ratio="2.568">
        <q-card-section horizontal>
          <template v-if="left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              style="border-radius:30px 0 0 30px;"
              img-class="img-hover"
            />
          </template>
          <q-card-section class="col">
            <div class="flex column">
              <div class="my-card-content">
                <div class="my-title">{{ title[global.isChinese] }}</div>
                <div class="txt">
                  {{ content[global.isChinese] }}
                </div>
                <q-btn size="1.25em" class="my-btn" outline push to="/solutions/commercial">了 解 更 多</q-btn>
              </div>
            </div>

          </q-card-section>
          <template v-if="!left">
            <q-img
              class="col cursor-pointer"
              :src="image"
              style="border-radius: 0 30px 30px 0;"
              img-class="img-hover"
            />
          </template>
        </q-card-section>
      </q-responsive>
    </q-card>
  </div>
</template>

<script>
import select from "src/api/select";

export default {
  name: "SolutionCard",
  props: {
    left: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      global: select.global,
      title : "智能家居",
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
  border-radius: 30px
.txt
  max-width: 21rem
  font-size: 1rem
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical

.my-card-content
  margin: 8% 5% 0 5%
  > *
    margin-top: 5%
.my-title
  font-size: 2.5rem
.my-btn
  margin-right: 50%

</style>
