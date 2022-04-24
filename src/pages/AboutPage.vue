<template>
  <HeaderImage :header-image-data="headerImageData" :is-center="true"/>
  <q-card class="company-des">{{description[global.isChinese]}}</q-card>
  <div class="gt-xs time-line-block">
    <div class="text-center">
      <h4>公 司 历 程</h4>
    </div>
    <ul class="timeline" id="timeline">
      <template v-for="item of timelines">
        <li class="li complete">
          <div class="timestamp">
            <span class="date">{{item.year}}</span>
          </div>
          <div class="status">
            {{item.event[global.isChinese]}}
          </div>
        </li>
      </template>
    </ul>
  </div>
  <div class="xs time-line-block">
    <div class="text-center">
      <h4>公 司 历 程</h4>
    </div>
    <q-timeline layout="loose" color="secondary">
      <template v-for="(item, idx) of timelines">
        <q-timeline-entry
          :title="item.event[global.isChinese]"
          :subtitle="item.year"
          :side="getSide(idx)"
        />
      </template>
    </q-timeline>
  </div>
  <div class="certificate-block">
    <div class="text-center">
      <h4>资 质 证 书</h4>
    </div>
    <q-responsive :ratio="1.778">
      <q-carousel
        animated
        v-model="slide"
        infinite
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <template v-for="(item,idx) of certificates">
          <q-carousel-slide :name="idx" :img-src="item"/>
        </template>
      </q-carousel>
    </q-responsive>
  </div>
  <div class="honor-block">
    <div class="text-center">
      <h4>公 司 荣 誉</h4>
    </div>
    <div class="honor-content">
        <template v-for="item of honors">
          <q-responsive :ratio="1.778">
            <div class="text-center">
              <q-img :src="item.img"/>
              <span>{{item.label[global.isChinese]}}</span>
            </div>
          </q-responsive>
          </template>
    </div>
  </div>
  <SeparatorBlock/>
  <div class="architect-block">
    <div class="text-center">
      <h4>组 织 架 构</h4>
    </div>
    <div class="architect-content">
      <template v-for="x in 5">
        <q-responsive :ratio="1.778">
          <div>
            <q-avatar size="16vw">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="头像">
            </q-avatar>
            <p class="text-h6" style="width: 100%;margin: auto;">
              张三
              <span class="float-right">CEO</span>
            </p>
            <p class="text-h6" style="max-height: 200px;overflow-y: hidden;">
              个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人……
            </p>
          </div>
        </q-responsive>
      </template>
    </div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import api from "src/api/api";
import select from "../api/select";
import SeparatorBlock from "components/SeparatorBlock";

export default {
  name: "AboutPage",
  components: {
    HeaderImage,
    SeparatorBlock
  },
  created() {
    this.getAbout()
  },
  data() {
    return {
      global : select.global,
      slide: 1,
      autoplay: false,
      description: "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍\n" +
        "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍\n" +
        "\n" +
        "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍\n" +
        "公司介绍公司介绍公司介绍公司介绍\n" +
        "\n" +
        "公司介绍公司介绍公司介绍",
      timelines: [
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
        {
          year: 2012,
          event: "大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记大事记"
        },
      ],
      certificates: [
        "https://cdn.quasar.dev/img/mountains.jpg",
        "https://cdn.quasar.dev/img/mountains.jpg"
      ],
      honors: [
        {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          label: "荣誉名称"
        },
        {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          label: "荣誉名称"
        },
        {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          label: "荣誉名称"
        },
        {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          label: "荣誉名称"
        },
      ],
      headerImageData: {
        headerImage: "https://cdn.quasar.dev/img/parallax2.jpg",
        headerLabel: "栏目标题",
        subHeaderLabel: "SloganSloganSloganSloganSloganSloganSloganSloganSloganSlogan"
      }
    }
  },
  methods: {
    async getAbout() {
      let res = await api.getAbout()
      if (res.data.code === 0 && res.status === 200) {
        // this.title = res.data.data.title
        // this.slogan = res.data.data.slogan
        this.description = res.data.data.description
        this.timelines = res.data.data.timelines
        this.certificates = res.data.data.certificates
        this.honors = res.data.data.honors
        this.headerImageData = res.data.data.headerImageData
      }
    },
    getSide(idx) {
      return idx % 2 ? "left" : "right"
    }
  }
}
</script>

<style lang="sass" scoped>
.time-line-block
  width: 90vw
  margin: 0 auto 90px auto
.timeline
  list-style-type: none
  display: flex
  align-items: center
  justify-content: center
.li
  transition: all 200ms ease-in

.timestamp
  margin-bottom: 20px
  padding: 0 40px
  display: flex
  flex-direction: column
  align-items: center
  font-weight: 100
.status
  padding: 15px
  display: flex
  justify-content: center
  border-top: 2px solid #D6DCE0
  position: relative
  transition: all 200ms ease-in
  h4
    font-weight: 600
  &:before
    content: ''
    width: 25px
    height: 25px
    background-color: white
    border-radius: 25px
    border: 1px solid #ddd
    position: absolute
    top: -15px
    left: 42%
    transition: all 200ms ease-in
.li.complete
  .status
    border-top: 2px solid #66DC71
    &:before
      background-color: #66DC71
      border: none
      transition: all 200ms ease-in
    h4
      color: #66DC71

@media (min-device-width: 320px) and (max-device-width: 700px)
  .timeline
    list-style-type: none
    display: block
  .li
    transition: all 200ms ease-in
    display: flex
    width: inherit
  .timestamp
    width: 100px
  .status
    &:before
      left: -8%
      top: 30%
      transition: all 200ms ease-in

.architect-content
  .q-responsive
    margin-bottom: 300px

.honor-content
  .q-responsive
    margin-bottom: 64px

@media (min-device-width: 600px)
  .architect-content, .honor-content
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .q-responsive
      width: 16vw
  .company-des
    margin: -60px auto 30px auto
    padding: 50px 72px
    width: 80vw
    line-height: 150%

@media (max-device-width: 600px)
  .architect-content, .honor-content
    .q-responsive
      width: 80vw
      .q-img
        width: 80vw
      .q-avatar
        width: 80vw
        height: 80vw
  .company-des
    margin: 10px auto
    padding: 25px 15px
    width: 95vw
    line-height: 150%
.certificate-block
  width: 80vw
  margin: 0 auto

.honor-block
  margin: auto 10vw
  margin-bottom: 80px

.architect-block
  margin: auto 10vw
</style>
