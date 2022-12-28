<template>
<MainHeader/>
<PlaceCard/>
</template>

<script>
// import Home from './components/Home.vue'
import MainHeader from './components/commonComponents/MainHeader.vue';
import PlaceCard from './components/childComponents/PlaceCard.vue';

export default {
  // name: 'App',
  components: {
    MainHeader,
    PlaceCard
  }
}
</script>

<style>
/* @import './assets/all'; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
