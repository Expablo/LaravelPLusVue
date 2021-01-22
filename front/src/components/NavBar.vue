<template>
  <nav class="main_navbar" role="navigation" aria-label="main navigation">
    <ul class="main_navbar_itens">
      <li :class="active == 'Home' ? 'active' : ''">
        <router-link to="/" class="boxx">
          <b-icon icon="home" size="is-small"> </b-icon>
          <p>Home</p>
        </router-link>
      </li>
      <li :class="['Lista'].indexOf(active) !== -1 ? 'active' : ''">
        <router-link to="/lista" class="boxx">
          <b-icon pack="fas" icon="bars" size="is-small"> </b-icon>
          <p>Listar</p>
        </router-link>
      </li>
    </ul>
    <small class="version">version x0.1</small>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import format from 'date-fns/format'

export default {
  name: 'Home',
  data() {
    return {
      isLoading: true,
      active: 'Home',
    }
  },
  methods: {
  },
  watch: {
    $route() {
      this.active = this.$route.name
      this.$emit('changeMe')
    }
  },
  computed: {
  },
  mounted() {
    this.active = this.$route.name
  },
}
</script>

<style scoped>
.sub_active{
  color: #049688!important;
}


.show_menu{
  height: 100px;
  transition: height 0.5s;
}

.show_menu2{
  height: 60px;
  transition: height 0.5s;
}

.icon{
  margin: 5px;
}

button {
  border: none;
}
a {
  color: #fff;
}

.customIcon {
  width: 52px;
  height: 52px;
}
.main_navbar_itens {
  padding: 20px;
  color: #fff;
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
}
.main_navbar_itens li:hover .sub_navbar {
  max-height: 300px;
}

.main_navbar_itens li{
  border-radius: 5px;
  margin: 0 0 5px 0;
}

.main_navbar_itens li .boxx {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 13px;
  color: #e0e6ed;
  /*border-bottom: 1px solid #9bd894;*/
  /*border-top: 1px solid #46494b;*/
}

.sub_navbar {
  transition: max-height 1s;
  overflow: hidden;
  max-height: 0;
}

.sub_navbar li {
  background: #2d2525;
  border-bottom: 1px solid #27292a;
  border-top: 1px solid #46494b;
  font-size: 12px;
  padding: 10px 0px;
}

.sub_navbar li:hover {
  background: #175310 !important;
}

.active {
  background: rgba(96, 125, 139, 0.54);
  color: #fff;
}
.main_navbar_itens li:hover {
  background: rgba(96, 125, 139, 0.54);
  color: #fff;
  cursor: pointer;
}

.version {
  position: absolute;
  bottom: 0;
  font-size: 10px;
  color: #fff;
  /*text-align: center;*/
  /*width: 100%;*/
}

/*@media screen and (max-width: 600px) {
  .boxx p{
    display: none;
  }
  .icon{
    margin: 18px;
  }
}*/

</style>
