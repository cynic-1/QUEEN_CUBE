<template>
  <div class="text-black q-pt-md">
    <q-separator color="#979797" spaced/>
    <div class="flex justify-between q-py-lg">
      <div class="row q-pl-xl gt-xs">
        <template v-for="x in 2">
          <div class="q-pr-md">
            <img alt="Official_Account_QR"  src="Official_Accounts_QR.jpg" width="80px">
          </div>
        </template>
      </div>

      <div class="row q-pl-md xs">
        <template v-for="x in 2">
          <div class="q-pr-sm">
            <img alt="Official_Account_QR"  src="Official_Accounts_QR.jpg" width="30px">
          </div>
        </template>
      </div>
      <div class="q-pr-xl gt-xs text-h6">
        公司地址：{{address}} <br>
        Email: <span>{{email}}</span>
      </div>
      <div class="q-pr-sm xs" style="font-size: xx-small">
        公司地址：{{address}} <br>
        Email: <span>{{email}}</span>
      </div>
    </div>
    <q-separator inset color="#979797" spaced/>
    <div class="flex justify-center q-mt-md">
      <div class="xs">
        <img alt="QUEEN_CUBE_LOGO" src="QUEEN_CUBE_LOGO.png" height="20px">
      </div>
      <div class="gt-xs">
        <img alt="QUEEN_CUBE_LOGO" src="QUEEN_CUBE_LOGO.png" height="40px">
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

export default {
  name: "Footer",
  data() {
    return {
      cooperators: [
        {
          logo: 'JHJT_LOGO.png',
        },
        {
          logo: 'MULI_LOGO.png',
        },
        {
          logo: 'NEW_HOPE_LOGO.png',
        },
        {
          logo: 'GEMDALE_LOGO_CUT.png',
        },
        {
          logo: 'JINKE_LOGO.png',
        },
        {
          logo: 'YUZHOU_LOGO.png',
        },
        {
          logo: 'BGY_LOGO.png',
        },
      ],
      address: '上海市徐汇区田林路200号华鑫天地',
      email: 'Info@queencube.cn',
    }
  },
  created() {
    this.getCooperators()
  },
  methods: {
    async getCooperators() {
      let res = await api.getCooperators()
      if (res.data.code === 0 && res.status === 200) {
        this.cooperators = res.data.data.cooperators
      }
    },
  },
}
</script>

<style scoped>

</style>
