<template>
  <div class="gt-xs justify-center">
    <q-card class="raw my-card" flat>
      <q-responsive :ratio="2.568">
        <q-card-section horizontal>
          <template v-if="left">
            <q-img
              class="col cursor-pointer"
              :src="solutionCardData.img"
              style="border-radius:30px 0 0 30px;"
              img-class="img-hover"
            />
          </template>
          <q-card-section class="col">
            <div class="flex column">
              <div class="my-card-content">
                <div class="my-title">{{ solutionCardData.title[global.isChinese] }}</div>
                <div class="txt">
                  {{ solutionCardData.content[global.isChinese] }}
                </div>
                <q-btn size="1.25em" class="my-btn" outline push
                       :to="solutionCardData.btn.link" :label="solutionCardData.btn.label[global.isChinese]"/>
              </div>
            </div>

          </q-card-section>
          <template v-if="!left">
            <q-img
              class="col cursor-pointer"
              :src="solutionCardData.img"
              style="border-radius: 0 30px 30px 0;"
              img-class="img-hover"
            />
          </template>
        </q-card-section>
      </q-responsive>
    </q-card>
  </div>
  <div class="xs">
    <q-responsive :ratio="1">
      <q-img
        class="col"
        :src="solutionCardData.img"
        img-class="img-hover"
      >
        <div class="q-px-xs q-my-xl q-gutter-y-md my-img-mobile">
          <div class="text-h3"> {{ solutionCardData.title[global.isChinese] }}</div>
          <div class="txt text-h4">{{ solutionCardData.content[global.isChinese] }}</div>
          <q-btn class="my-btn" outline push size="md"
                 :to="solutionCardData.btn.link" :label="solutionCardData.btn.label[global.isChinese]"/>
        </div>
      </q-img>
      <!--        <ProductLCard />-->
    </q-responsive>
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
    },
    solutionCardData: Object
  },
  data () {
    return {
      global: select.global,
      title : "智能家居",
      content : "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" +
        "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题",
      img: "https://cdn.quasar.dev/img/parallax2.jpg",
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
.my-img-mobile
  position: absolute
  top: 4vw
  background-color: unset
</style>
