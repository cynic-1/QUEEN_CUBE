<template>
  <q-layout view="hHr lpR fFr">

    <q-header reveal elevated style="color: black">
      <q-toolbar>
        <div class="q-pr-lg">
            <img alt="logo" src="LOGO2.png" height="40">
        </div>
          <template v-for="item of headers">
            <div class="menu-item gt-xs" :class="{'hasChild': item.child.length}">
              <q-btn stretch flat :label="item.label[global.isChinese]" :to="item.link"/>
              <div class="childMenu" v-if="item.child.length">
                <template v-for="it of item.child">
                  <div class="sub-menu" @click="jumpTo(it.link)">
                    {{it.label[global.isChinese]}}
                  </div>
                </template>
              </div>
            </div>
          </template>

        <q-toolbar-title/>

        <div class="menu-item header-search" style="margin-right: unset; min-width: unset;">
          <q-icon name="search" size="xs" class="cursor-pointer" @click.stop="search"/>
        </div>
        <div class="q-px-md cursor-pointer" @click="langChange">
          <template v-if="global.isChinese">
            EN
          </template>
          <template v-else>
            中
          </template>
        </div>
        <div class="xs">
          <q-btn class="lt-sm" flat @click="drawer = !drawer" round dense icon="menu" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="600"
      bordered
      side="right"
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in headers" :key="index">
            <q-item  clickable v-ripple @click="jumpTo(menuItem.link)">
              <q-item-section>
                {{ menuItem.label[global.isChinese] }}
              </q-item-section>
            </q-item>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-primary">
      <router-view />
      <Footer/>
    </q-page-container>
  </q-layout>
</template>

<script>
import select from "../api/select";
import { defineComponent } from 'vue'
import HeaderSearch from "components/HeaderSearch";
import Footer from "components/Footer";
import api from "src/api/api";


export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderSearch,
    Footer
  },

  data() {
    return {
      drawer: false,
      global: select.global,
      logo: "",
      headers: [
        {
          label: ['Product Center', '产品中心'],
          link: 'productCenter',
          child: [
            {
              label: ['Product Center', '产品中心'],
              link: 'productCenter',
            },
          ]
      },
        {
          label: ['Product Center', '产品中心'],
          link: 'productCenter',
          child: [
            {
              label: ['Product Center', '产品中心'],
              link: 'productCenter',
            },
          ]
        },
      ]
      }
    },
  methods: {
    langChange() {
      this.global.isChinese = (this.global.isChinese+1)%2
    },
    getText(chinese, english) {
       return this.global.isChinese ? chinese : english
    },
    search(){
      // console.log(this.searchValue)
      this.$router.push('/searchResults')
    },
    async getHeaderData() {
      try {
        let res = await api.getHeaderData()
        if (res.data.code === 0 && res.status === 200) {
          this.headers = res.data.data.headers
          this.logo = res.data.data.logo
        }
      } catch (e) {
        console.log(e)
      }

    },
    jumpTo(l) {
      this.$router.push(l)
    }
  },
  created() {
    this.getHeaderData()
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
  cursor: pointer;
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
    &:hover {
      background-color: #F2F2F2;
      color: #6df3ff;
    }
  }
  .router-link-active {
    text-decoration: underline;
  }
}

</style>
