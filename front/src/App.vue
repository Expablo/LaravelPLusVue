<template>
  <div id="app">
    <!-- barrinha de cima -->
    <div class="top_search">
      <div class="logo">
        <b style="margin:auto;">TESTE</b>
      </div>

    </div>
    <!-- barrinha do menu e config -->
    <div class="header">
      <div class="flex">
        <div class="menu_icon" @click="toggleMenu()">
          <b-icon pack="fas" icon="bars"> </b-icon>
        </div>
        <div class="title">
          {{active}}
        </div>
      </div>
    </div>
    <!-- div nav bar -->
    <div class="nav_box" :class="navbarWidth ? '' : 'nav_box_short'">
      <Navbar :rota="active"/>
    </div>
    <div class="content_box" :class="navbarWidth ? '' : 'content_box_short'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      isLoading: true,
      active: 'xx',
      navbarWidth: true,
      deviceSearch: '',
      hexTokens: {
        F: {
          pattern: /[0-9a-fA-F]/,
          transform: v => v.toLocaleUpperCase()
        }
      }
    }
  },
  methods:{
    toggleMenu(){
      this.navbarWidth = !this.navbarWidth
    }
  },
  watch: {
    $route() {
      console.log('xx', this.$route.name)
      this.active = this.$route.name
    }
  },
  mounted() {
  },

}
</script>
<style scoped>

.content_box{
  padding: 10px;
  transition: margin-left 0.5s;
  margin-left: 220px;
  background: #060816;
  height: calc(100vh - 107px);
}
.content_box_short{
  transition: margin-left 0.5s;
  margin-left: 0px!important;
}

.nav_box{
  overflow: auto;
  transition: width 0.5s;
  width: 220px;
  height: calc(100vh - 107px);
  background: #123c82;
  float: left;
  border-right: solid 1px #131313;
}

.nav_box_short{
  transition: width 0.5s;
  width: 0px!important;
}

.button_config{
  margin: 0 20px;
}
.button_config  button {
  border:solid #3b3f5c 1px;
  border-radius: 5px;
  background: transparent;
  color: #e0e6ed;
  display: flex;
  align-items: center;
}

.flex{
  display: flex;
  align-items: center;
}

.header{
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.menu_icon{
  padding: 20px;
}
.menu_icon .icon{
  color: #e0e6ed;
  cursor: pointer;
}

.title{
  color: #e0e6ed;
  font-size: 16px;
}

.header{
  height: 53px;
  background: rgb(26 28 45);
}
.logo{
  color: #049688;
  display: flex;
  align-content: center;
}

.logo img{
  margin-right: 10px;
  height: 40px;
  vertical-align: middle;
}
.top_search{
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  background: #123c82;
}

</style>
