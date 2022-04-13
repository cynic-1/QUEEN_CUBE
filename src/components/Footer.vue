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
        Email: <a :href="'mailto:'+email">{{email}}</a>
      </div>
      <div class="q-pr-sm xs" style="font-size: xx-small">
        公司地址：{{address}} <br>
        Email: <a :href="'mailto:'+email">{{email}}</a>
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
          <img :alt="coop.name" :src="coop.logo" height="13px" style="margin-left: 5px; margin-top: 5px;">
        </template>
      </div>
      <div class="gt-xs q-pt-md q-pb-xl flex justify-around">
        <template v-for="coop of cooperators">
          <img :alt="coop.name" :src="coop.logo" height="30px" style="margin-left: 20px; margin-top: 10px;">
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      cooperators: [
        {
          name: '嘉宏集团',
          logo: 'JHJT_LOGO.png',
        },
        {
          name: '木里木外',
          logo: 'MULI_LOGO.png',
        },
        {
          name: '新希望集团',
          logo: 'NEW_HOPE_LOGO.png',
        },
        {
          name: '金地集团',
          logo: 'GEMDALE_LOGO_CUT.png',
        },
        {
          name: '金科集团',
          logo: 'JINKE_LOGO.png',
        },
        {
          name: '禹州地产',
          logo: 'YUZHOU_LOGO.png',
        },
        {
          name: '碧桂园',
          logo: 'BGY_LOGO.png',
        },
      ],
      address: '上海市徐汇区田林路200号华鑫天地',
      email: 'Info@queencube.cn',
    }
  }
}
</script>

<style scoped>

</style>
