<template>
  <div class="text-black q-pt-md">
    <q-separator color="#979797" spaced/>
    <div class="flex justify-between q-py-lg">
      <div class="row" style="padding-left: 5%;">
        <div class="q-pr-md qr-block">
          <q-avatar class="cursor-pointer" square>
            <img alt="wechat" src="wechat.png">
          </q-avatar>
          <img alt="Official_Account_QR"  src="gzh.jpg">
        </div>
        <div class="q-pr-md qr-block">
          <q-avatar class="cursor-pointer" square>
            <img alt="wechat" src="video.png">
          </q-avatar>
          <img alt="video_Account_QR"  src="sph.jpg">
        </div>
        <div class="q-pr-md qr-block">
          <q-avatar class="cursor-pointer" square>
            <img alt="wechat" src="tiktok_icon.png">
          </q-avatar>
          <img alt="Official_Account_QR"  src="tiktok.jpg">
        </div>
      </div>

      <div class="row xs">

      </div>
      <div class="q-pr-xl gt-xs text-h6">
        {{Address}}: {{address[global.isChinese]}} <br>
        Email: <span>{{email}}</span>
      </div>
      <div class="q-pa-sm xs" style="font-size: xx-small; white-space: pre-line;">
        {{Address}}: {{address[global.isChinese]}} <br>
        Email: <span>{{email}}</span>
      </div>
    </div>
    <q-separator inset color="#979797" spaced/>
    <div class="flex justify-center q-mt-md">
      <div class="xs">
        <img alt="QUEEN_CUBE_LOGO" src="QUEEN_CUBE_LOGO.png" height="20">
      </div>
      <div class="gt-xs">
        <img alt="QUEEN_CUBE_LOGO" src="QUEEN_CUBE_LOGO.png" height="40">
      </div>
    </div>
    <div class="flex justify-center">
      <div class="xs q-py-sm flex justify-around">
        <template v-for="coop of cooperators">
          <img :src="coop.logo" height="13" style="margin-left: 5px; margin-top: 5px;" alt="coop">
        </template>
      </div>
      <div class="gt-xs q-pt-md q-pb-xl flex justify-around">
        <template v-for="coop of cooperators">
          <img :src="coop.logo" height="30" style="margin-left: 20px; margin-top: 10px;" alt="coop">
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import api from "src/api/api";
import select from "src/api/select"
export default {
  name: "Footer",
  data() {
    return {
      global: select.global,
      cooperators: [
        {
          logo: '',
        }
      ],
      address: ['Huaxin Tiandi, No. 200 Tianlin Road\n, Xuhui District, Shanghai', '上海市徐汇区田林路200号华鑫天地'],
      email: 'Info@queencube.cn',
    }
  },
  created() {
    this.getCooperators()
  },
  methods: {
    async getCooperators() {
      try {
        let res = await api.getCooperators()
        if (res.data.code === 0 && res.status === 200) {
          this.cooperators = res.data.data.cooperators
        }
      } catch (e) {
        console.log(e)
      }

    },
  },
  computed: {
    Address() {
      return this.global.isChinese ? "公司地址" : "Address"
    },

  }
}
</script>

<style scoped>
.qr-block > img {
  display: none;
  position: absolute;
  width: 160px;
  height: 160px;
  z-index: 22;
  border: 2px solid black;
}
.qr-block:hover > img {
  display: block;
}
</style>
