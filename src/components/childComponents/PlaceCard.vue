<template>
  <!-- todo 圖片為何不能寫路徑 -->
<div class="mx-auto h3 fw-bold text-center text-center">景點列表</div>
<div class="container-fluid ms-3 my-2 d-flex justify-content-centers flex-wrap"> 
    <div class="card mx-3 my-3" style="width: 18rem;" v-for="(item,key) in places" :key="key">
      <img class="card-img-top" style="height: 12rem;" :src="item.imgPath" :alt="item.title">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text text-truncate-2">{{ item.content }}</p>
        <BrowseBtn/>
      </div>
    </div>
</div>
</template>
<script>
import BrowseBtn from './BrowseBtn.vue';
import axios from 'axios';
export default{
  data() {
    return {
      places:[],
    };
  },
  components: {
  BrowseBtn
  },
  created(){
    axios.get("http://localhost:3000/places")
     .then(res =>  this.places = res.data)
     .catch(err =>
     {
      console.log(err)
      throw(err)
     })
    }
}
</script>
<style scoped>
.text-truncate-2{
  display: -webkit-box; /* Chromium: Edge , Google Chrome & Safari*/ 
  overflow: hidden;
  text-overflow: ellipsis; 
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  /* https://www.minwt.com/webdesign-dev/css/20296.html */
}
</style>