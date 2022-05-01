<template>
  <HeaderImage :header-image-data="headerImageData" :is-center="true"/>
  <q-card class="company-des">{{description[global.isChinese]}}</q-card>
  <div class="gt-xs time-line-block">
    <div class="text-center text-h4 text-weight-bolder q-mb-xl">{{History}}</div>
    <ul class="timeline">
      <template v-for="item of timelines">
        <li class="li complete">
          <div class="timestamp">
            <span class="date">{{item.year}}</span>
          </div>
          <div class="status">
            {{item.events[global.isChinese]}}
          </div>
        </li>
      </template>
    </ul>
  </div>
  <div class="xs time-line-block">
    <div class="text-center text-h4 text-weight-bolder q-mb-xl">{{History}}</div>

    <q-timeline layout="loose" color="secondary">
      <template v-for="(item, idx) of timelines">
        <q-timeline-entry
          :title="item.events[global.isChinese]"
          :subtitle="item.year"
          :side="getSide(idx)"
        />
      </template>
    </q-timeline>
  </div>
  <div class="certificate-block">
    <div class="text-center text-h4 text-weight-bolder q-mb-xl">{{Certificates}}</div>

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
          <q-carousel-slide :name="idx+1" :img-src="item"/>
        </template>
      </q-carousel>
    </q-responsive>
  </div>
  <div class="honor-block">
    <div class="text-center text-h4 text-weight-bolder q-mb-xl">{{Honors}}</div>

    <div class="honor-content">
        <template v-for="item of honors">
          <q-responsive :ratio="1.778">
            <div class="text-center">
              <q-img :src="item.img" height="100%"/>
              <span>{{item.label[global.isChinese]}}</span>
            </div>
          </q-responsive>
          </template>
    </div>
  </div>
  <SeparatorBlock/>
  <div class="architect-block">
    <div class="text-center text-h4 text-weight-bolder q-mb-xl">{{Architecture}}</div>

    <div class="architect-content">
      <template v-for="item of architecture">
        <q-responsive :ratio="1.778">
          <div>
            <q-avatar size="16vw">
              <img :src="item.img" alt="头像">
            </q-avatar>
            <p class="text-h6 text-weight-bold" style="width: 100%;margin: auto;">
              {{item.name[global.isChinese]}}
              <span class="float-right">{{item.title[global.isChinese]}}</span>
            </p>
            <p class="text-h6" style="max-height: 200px;overflow-y: hidden;">
              {{item.description[global.isChinese]}}
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
      global: select.global,
      autoplay: false,
      slide: 1,
      "description": ["21312", "\u516c\u53f8\u4ecb\u7ecd"],
      "timelines": [
        {
          "year": 2012,
          "events": ["English", "\u4e2d\u6587"]
        },
      ],
      "certificates": [""],
      "honors": [{"img": "",
        "label": ["honour", "\u8363\u8a89"]}],
      "headerImageData": {
      "headerImage": "",
        "headerLabel": ["title", "\u6807\u9898"],
        "subHeaderLabel": ["slogan", "\u6807\u8bed"]
      },
      architecture: [
        {
          name: ['Andy', '安迪'],
          title: ['CEO', 'CEO'], // 职称
          img: '',
          description: ['description description', '介绍介绍']
        },
        {
          name: ['Andy', '安迪'],
          title: ['CEO', 'CEO'], // 职称
          img: '',
          description: ['description description', '介绍介绍']
        },
      ]
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
        this.architecture = res.data.data.architecture
        console.log(this.timelines)
      } else console.log(res)
    },
    getSide(idx) {
      return idx % 2 ? "left" : "right"
    }
  },
  computed: {
    History() {
      return this.global.isChinese ? "公 司 历 程" : "History"
    },
    Certificates() {
      return this.global.isChinese ? "资 质 证 书" : "Certificates"
    },
    Honors() {
      return this.global.isChinese ? "公 司 荣 誉" : "Honors"
    },
    Architecture() {
      return this.global.isChinese ? "组 织 架 构" : "Architecture"
    },
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
