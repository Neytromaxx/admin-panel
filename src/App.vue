<template>
  <app-sidebar v-if="layout"></app-sidebar>
  <router-view/>
</template>
<script>
import AppSidebar from './components/ui/AppSidebar.vue';
import {computed} from "vue";
import {useRoute} from "vue-router";

export default{
  setup(){
      const route = useRoute()

      return{
        layout: computed( ()=> route.meta.layout )
      }
    },
  components:{
    AppSidebar
  }
}
</script>
<style>
 /* #app {
  background-color: #423a3a;
} */

nav {
  padding-right: 30px;
}
/*
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
