<template lang="html">
  <div>
    <navbar></navbar>
    <keep-alive :max="13">
    <router-view :key="$route.fullPath" /> 
    </keep-alive>
  </div>
</template>

<script>
// import Vue from "vue";
import navbar from "./NavBar.vue";


export default {
  name: "app",
  components: {
    navbar
  },

mounted() {
  
  //uibuilder.debug(true);
  // uibuilder.start('/navbar', '/uibuilder/vendor/socket.io')
    
}

};
</script>


<style>
h2 {
font-weight: bold !important;
}
</style>
