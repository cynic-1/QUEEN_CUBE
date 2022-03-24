<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="q-pr-lg">
          <q-avatar>
            <img alt="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </div>

        <template v-for="item of headers">
          <div class="menu-item" :class="{hasChild: item.child.length}">
            <q-btn stretch flat :label="item.chinese" :to="item.link"/>
            <div class="childMenu" v-if="item.child.length">
              <template v-for="it of item.child">
                <div class="sub-menu">
                  <q-btn stretch flat :label="it.chinese" :to="item.link"/>
                </div>
              </template>
            </div>
          </div>
        </template>

        <q-toolbar-title/>

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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  data() {
    return {
      isChinese: true,
      headers: [
        {
          chinese: '产品中心',
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
          link: '',
          child: []
        },
        {
          chinese: '新闻资讯',
          link: '',
          child: []
        },
        {
          chinese: '资料下载',
          link: '',
          child: []
        },
        {
          chinese: '关于我们',
          link: '',
          child: []
        }
      ]
      }
    },
  methods: {
    langChange() {
      this.isChinese = !this.isChinese
      console.log(this.isChinese)
    }
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
&:not(:last-child):after{
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
    color: #1fcbc5;
  }
}

</style>
