<template>
  <HeaderImage :header-image-data="headerImageData"/>
  <div class="page-width">
    <h4>{{title}}</h4>
    <h6>{{date}}</h6>
    <div v-html="content" class="htmlBox"></div>
  </div>
</template>

<script>
import HeaderImage from "components/HeaderImage";
import api from "../api/api.js"
export default {
  name: "DetailPage",
  components: {
    HeaderImage
  },
  data() {
    return {
      type: this.$route.query.type,
      id: this.$route.query.id,
      // 需请求
      headerImageData: {
        headerImage: "https://cdn.quasar.dev/img/parallax2.jpg",
        headerLabel: "",
        subHeaderLabel: ""
      },
      title: "标题标题",
      date: "2022年5月1日",
      content: "<p>首先，我们应该了解智能家居。</p ><p>从人的角度，让我们举一个例子，比如手机，我们现在都习惯了智能手机。</p ><p>过去，手机的功能是打电话。</p ><p>如今，上网、玩游戏、购物、转账、聊天、视频聊天、看书等等都极大地“方便”了我们的生活，让生活变得更加“简单”。</p ><figure class=\"image\"><img src=\"http://47.103.152.187:8000/media/ckeditor/888.png\"></figure><p>作为一个行业，智能家居肯定有其价值。</p ><p>智能家居的指导原则是简单、稳定、方便和舒适。</p ><p>其次，我们从产品的角度理解智能家居。</p ><p>许多想成为智能家居用户的朋友都会看到一些智能产品：开关面板、摄像头、门磁、门铃、插座和一些传感器。</p ><p>当他们看到这些东西的时候，他们感到稀疏和正常，没有什么特别的，很难想象这和智能家居之间的关系。</p ><figure class=\"image\"><img src=\"http://47.103.152.187:8000/media/ckeditor/千库网_线性物联网智能家居_元素编号12868419.png\"></figure><p>事实上，仔细想想什么和我们的家庭生活有关。</p ><p>难道不是灯光的调节、窗帘的自动化、所有电气设备的联动操作(简单)、防盗、防毒、背景音乐、可视对讲、门禁控制等吗？</p ><p>智能家居全场景方案设计，</p ><p>让看似普通的智能产品组合变得更有“灵魂”。</p ><p>让他们相互交流，设置各种场景，这样每个人都可以简单地享受“舒适”的生活。</p ><p>这就是智力的定义。</p ><figure class=\"image\"><img src=\"http://47.103.152.187:8000/media/ckeditor/千库网_线性物联网智能家居_元素编号12868419_rLzS9Nw.png\"></figure><p>再次，是从功能上理解智能家居。</p ><p>当您清晨睁开眼睛，您最喜欢的轻音乐替代了以往刺耳的闹铃声，</p ><p>窗帘自动打开只留一层薄纱，让外面的阳光照进来，</p ><p>电视自动打开正播放着您爱看的新闻，在柔和的音乐声中吃完早餐后，</p ><p>在门口触摸屏上轻按“离家”键，灯光电视音乐全部关闭，</p ><p>同时家里的安防系统开始布防，您可安心出门工作；</p ><figure class=\"image\"><img src=\"http://47.103.152.187:8000/media/ckeditor/千库网_别墅智能家居房子住宅截面剖面图_元素编号13193690.png\"></figure><p>空调、地暖、窗帘、灯光和电视等家用电器只需一个按钮就可以控制，因此无需担心找到各种遥控器。我们的智能家居可以帮助您消除生活中复杂的重复性操作。</p ><p>如果你想在晚上起床，你不必用你熟睡的眼睛去摸索电灯开关。当你走到浴室门口时，里面的灯会慢慢亮起来。</p ><p>&nbsp;</p ><p>工作一天后，打开门，慢慢点亮家里的灯，躺下休息时，不用起来就可以轻松地打开/关闭窗帘、打开/关闭灯、打开/关闭空调、电视和背景音乐。只需通过智能语音控制，家里的小管家为你服务到位。</p ><p>&nbsp;</p ><p>再好的装修都需要灯光变化来点缀。智能灯光系统可以随意调节家居的明暗、色温，轻松就能实现奇妙的照明变化。</p ><p>在情人节，你可以在家和你的爱人一起享受浪漫的烛光晚餐，而无需提前预订餐桌。让你的装饰更加奢华，带给你五星级酒店的舒适。</p ><p>&nbsp;</p ><p>临睡前，您不必再每个房间去看电灯电视有没有关，门窗有没有锁好，您只需轻按床头触摸屏上的“晚安”键，一切都能帮您搞定，没有关的电灯电视全部关闭，门窗自动锁好，同时安防系统进入夜间布防状态，您可安心入睡。</p ><p>全宅智能家居系统涵盖智能灯控系统、智能照明系统、遮阳门窗系统、暖通舒适系统、智能交互中心、影音娱乐系统、智能安防系统、能源管理系统、智能睡眠系统、WiFi信号覆盖等，为住宅、别墅、企业、酒店、公共场所等提供全场景式智能化解决方案。</p ><p>内容均来源于网络, 版权归原作者所有如有侵权请立即与我们联系,我们将及时删除处理</p ><p><strong>— END —</strong></p >"
    }
  },
  methods: {
    async getDetailData() {
      let res = await api.getDetailData(this.type, this.id)
      if (res.data.code === 0 && res.status === 200) {
        this.headerImageData.headerImage = res.data.data.headerImage
        this.title = res.data.data.title
        this.date = res.data.data.date
        this.content = res.data.data.content
      }
    }
  },
  watch: {
    '$route': function () {
      this.type = this.$route.query.type
      this.id = this.$route.query.id
    },
    type() {
      this.getDetailData()
    },
  },
  created() {
    this.getDetailData()
  }
}
</script>

<style scoped>
.htmlBox >>> img {
  width: 60vw;
}
@media (min-device-width: 600px) {
  .page-width {
    padding: 0 10vw;
  }
  .htmlBox >>> p {
    font-size: 20px;
  }
}
@media (max-device-width: 600px) {
  .page-width {
    padding: 0 20px;
  }
}
</style>
