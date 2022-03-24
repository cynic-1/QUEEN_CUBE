<template>
  <div class="header-search">
    <q-icon name="search" @click.stop="search"/>
<!--    <input ref="searchInput" :class="{'show':show}" v-model="searchValue" type="text" @click.stop="click" @keyup.enter="search"/>-->
  </div>
</template>

<script>
import route from '../router/index'
const $router = route()
export default {
  name: "header-search",
  data(){
    return{
      searchValue: '',
      show: false
    }
  },
  watch:{
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  methods:{
    search(){
      console.log(this.searchValue)
      $router.push('/search');
      this.close()
    },
    click(){
      this.searchValue = ''
      this.show = !this.show
      if (this.show) {
        this.$refs.searchInput && this.$refs.searchInput.focus()
      }
    },
    close(){
      this.$refs.searchInput && this.$refs.searchInput.blur()
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
.header-search{
  display: inline-block;
  position: relative;
  i{
    color: white;
    font-size: 18px;
    position: relative;
    top: 3px;
  }
  input{
    border:none;
    outline:none;
    overflow: hidden;
    background: transparent;
    height: 30px;
    width: 100px;
    transition: .2s all;
    border-bottom: 1px solid #8fd0cc;
    &.show{
      width: 160px;
      margin-left: 10px;
    }
    &:focus{
      border-bottom: 1px solid #8fd0cc;
    }
  }
}
</style>
