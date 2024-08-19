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
nav {
  padding-right: 30px;
}
</style>
