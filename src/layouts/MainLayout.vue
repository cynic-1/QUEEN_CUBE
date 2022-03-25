<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated style="color: black">
      <q-toolbar>
        <q-btn class="lt-sm" flat @click="drawer = !drawer" round dense icon="menu" />
        <div class="q-pr-lg">
          <q-avatar>
            <img alt="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </div>
          <template v-for="item of headers">
            <div class="menu-item gt-xs" :class="{hasChild: item.child.length}">
              <q-btn stretch flat :label="getText(item)" :to="item.link"/>
              <div class="childMenu" v-if="item.child.length">
                <template v-for="it of item.child">
                  <div class="sub-menu">
                    <q-btn stretch flat :label="getText(it)" :to="item.link"/>
                  </div>
                </template>
              </div>
            </div>
          </template>

        <q-toolbar-title/>

        <div class="menu-item header-search" style="margin-right: unset; min-width: unset;">
          <q-icon name="search" size="xs" class="cursor-pointer" @click.stop="search"/>
        </div>
        <div class="menu-item cursor-pointer" @click="langChange">
          <template v-if="isChinese">
            EN
          </template>
          <template v-else>
            中
          </template>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="600"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in headers" :key="index">
            <q-item  clickable v-ripple>
              <q-item-section>
                {{ getText(menuItem) }}
              </q-item-section>
            </q-item>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="color: black">
      <div class="flex justify-between q-py-lg">
          <div class="row q-pl-xl gt-xs">
            <template v-for="x in 2">
              <div class="q-pr-md">
                <img alt="Official_Account_QR"  src="Official_Accounts_QR.jpg" width="50px">
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
      <div class="flex justify-center">
         <div class="xs q-pt-xs">QUEENCUBE</div>
         <div class="gt-xs q-pt-md text-h5">QUEENCUBE</div>
      </div>
      <div class="flex justify-center">
        <div class="xs">
          <img alt="QUEEN_CUBE_LOGO" src="QUEEN_CUBE_LOGO.png" width="80px">
        </div>
        <div class="gt-xs">
          <img alt="QUEEN_CUBE_LOGO" src="QUEEN_CUBE_LOGO.png" width="144px">
        </div>
      </div>
      <div class="flex justify-center">
        <div class="xs q-py-md">
          <template v-for="coop of cooperators">
            <img :alt="coop.name" :src="coop.logo" width="40px" style="padding-left: 10px;">
          </template>
        </div>
        <div class="gt-xs q-py-xl">
          <template v-for="coop of cooperators">
            <img :alt="coop.name" :src="coop.logo" width="100px" style="padding-left: 20px;">
          </template>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderSearch from "components/HeaderSearch";
import route from '../router/index'
const router = route()
export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderSearch
  },

  data() {
    return {
      drawer: false,
      isChinese: true,
      address: '上海市徐汇区田林路200号华鑫天地',
      email: 'Info@queencube.cn',
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
          logo: 'GEMDALE_LOGO.png',
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
      headers: [
        {
          chinese: '产品中心',
          english: 'Product Center',
          link: '',
          child: [
            {
              chinese: 'KNX_CN',
              english: 'KNX'
            }
          ]
      },
        {
          chinese: '解决方案',
          english: 'Solution',
          link: '',
          child: []
        },
        {
          chinese: '新闻资讯',
          english: 'News',
          link: '',
          child: []
        },
        {
          chinese: '资料下载',
          english: 'Downloads',
          link: '',
          child: []
        },
        {
          chinese: '关于我们',
          english: 'About',
          link: '',
          child: []
        }
      ]
      }
    },
  methods: {
    langChange() {
      this.isChinese = !this.isChinese
    },
    getText(a) {
      return this.isChinese ? a.chinese : a.english
    },
    search(){
      console.log(this.searchValue)
      router.push('/search');
      this.close()
    },
  }
})
</script>

<style lang="scss" scoped>
.menu-item {
  min-width: 60px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  &:hover {
    color: #6df3ff;
  }
  &:not(:last-child) {
   margin-right: 15px;
 }
  &.hasChild:hover .childMenu{
   opacity:1;
   visibility: visible;
   transform: translateY(-5px);
 }
}
.childMenu{
  width: 130px;
  background-color: #FDFDFD;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 55px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: .7s all ease;
  -webkit-transition: .6s all ease;
  -moz-transition: .6s all linear;
  -o-transition: .6s all ease;
  color: black;
  &:hover {
    color: #6df3ff;
  }
&:before,&:after{
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 8px solid white;
            top: -8px;
            left: 20px;
          }
&:before {
   top: -9px;
   border-bottom: 8px solid #ddd;
 }
.sub-menu{
  height: 40px;
  line-height: 40px;
  position: relative;
&:not(:last-child):after {
   /*position: absolute;*/
   content: '';
   width: 50%;
   height: 1px;
   bottom: 0;
   left: 25%;
   z-index: 99;
 }
}
  .router-link-active {
    text-decoration: underline;
  }
}

</style>
